import { fromArray, newMap, newSet } from '~/shims';
import { DAYS_30 } from '../../shared/constants';
import { emitter, LifecycleHook } from '../../shared/events';
import { subtract } from '../../shared/utils';
import { CookieKey, deflate, getCookie, inflate, setJsonCookie } from '../../shared/utils/storage';
import { Context } from '../context';
import { CandidateId, ExperimentId, PlanId, toEidCidPair } from '../plans';
import { belongsToExperiment } from '../plans/helpers';
import {retrofit, sendEvent, SpecialEventReason} from '../utils';


export interface ExperimentsRecord {
	cf: number[]; // confirmed
	ct: number[]; // contaminated
	f: number[]; // filtered
	s: number[]; // selected

	/**
	 * Lookup table of plan IDs. The index of an plan ID in this table will be
	 * used as the items in the sets above.
	 */
	l: CandidateId[];
}

const defaultRecord: ExperimentsRecord = {
	l: [],
	cf: [],
	ct: [],
	f: [],
	s: []
};

/**
 * The `ExperimentRecorder` is responsible for persisting which experiments have been selected
 * and which have been filtered, notifying the backend, and for emitting `filtered` and
 * `selected` events.
 */
export class ExperimentRecorder {
	private readonly experiments = newMap<ExperimentId, PlanId>();

	public readonly confirmed: Set<PlanId>;
	public readonly contaminated: Set<PlanId>;
	public readonly filtered: Set<PlanId>;
	public readonly selected: Set<PlanId>;

	constructor(private readonly context: Context) {
		const saved = retrofit(defaultRecord, getCookie<Partial<ExperimentsRecord>>(CookieKey.CandidateIds));
		const lookup = saved.l;
		const inflated = inflate(saved, 'l');

		for (const candidateId of lookup) {
			const { eid, cid } = toEidCidPair(candidateId);
			this.experiments.set(eid, cid);
		}

		this.confirmed = newSet(inflated.cf);
		this.contaminated = newSet(inflated.ct);
		this.filtered = newSet(inflated.f);
		this.selected = newSet(inflated.s);

		this.save();
	}

	checkIfConfirmed(candidateId: CandidateId): boolean {
		return this.confirmed.has(candidateId);
	}

	checkIfContaminated(candidateId: CandidateId): boolean {
		return this.contaminated.has(candidateId);
	}

	markConfirmed(candidateId: CandidateId): boolean {
		const { config } = this.context;

		if (!this.confirmed.has(candidateId)) {
			this.sweepOut(this.confirmed, candidateId);
			this.confirmed.add(candidateId);
		}

		sendEvent(config, 'confirmation', { cid: candidateId });

		this.save();

		return true;
	}

	markContaminated(candidateId: CandidateId, reason: SpecialEventReason, detail?: string): boolean {
		const { config } = this.context;

		if (!this.confirmed.has(candidateId)) {
			// Still send the event, so the system can record failed confirmation attempts
			sendEvent(config, 'contamination', { cid: candidateId, reason: reason, detail: detail });
			this.save();
			return false;
		}

		if (!this.contaminated.has(candidateId)) {
			/* Contamination list is not swept out unlike the other lists */

			this.confirmed.delete(candidateId);
			this.contaminated.add(candidateId);

			sendEvent(config, 'contamination', { cid: candidateId, reason: reason, detail: detail });
		}

		this.save();

		return true;
	}

	markExcluded(experimentId: ExperimentId, reason: string = '') {
		const planId = `*:${experimentId}`;

		this.sweepOut(this.confirmed, planId);
		this.sweepOut(this.filtered, planId);
		this.sweepOut(this.selected, planId);

		this.markFiltered(planId, reason);
	}

	markFiltered(candidateId: CandidateId | PlanId, reason: string = ''): void {
		const previous = this.replaceIfExperimentSeen(candidateId);

		if (!this.filtered.has(candidateId)) {
			this.sweepOut(this.filtered, candidateId);
			this.filtered.add(candidateId);

			if (candidateId !== previous) {
				const { eid, cid } = toEidCidPair(candidateId);

				emitter.emit(LifecycleHook.Filtered, {
					experimentId: eid,
					candidateId: cid,
					reason
				});
			}
		}

		this.save();
	}

	markSelected(candidateId: CandidateId) {
		const previous = this.replaceIfExperimentSeen(candidateId);

		if (!this.selected.has(candidateId)) {
			this.sweepOut(this.selected, candidateId);
			this.selected.add(candidateId);

			if (candidateId !== previous) {
				const { eid, cid } = toEidCidPair(candidateId);

				emitter.emit(LifecycleHook.Selected, {
					experimentId: eid,
					candidateId: cid
				});
			}
		}

		this.save();
	}

	/**
	 * Replaces a candidate for a given experiment with a new candidate from the same experiment if
	 * the experiment had already been seen.
	 *
	 * @param candidateId
	 * @return candidateId that was previously recorded or null if no candidate had been recorded
	 */
	private replaceIfExperimentSeen(candidateId: CandidateId): CandidateId | null {
		const { eid, cid } = toEidCidPair(candidateId);

		if (!this.experiments.has(eid)) {
			return null;
		}

		const oldCid = this.experiments.get(eid)!;
		this.experiments.set(eid, cid);

		this.filtered.delete(oldCid);
		this.selected.delete(oldCid);

		return oldCid;
	}

	private save() {
		const { cookieDomains } = this.context.config;
		const state = {
			cf: fromArray(this.confirmed),
			ct: fromArray(this.contaminated),
			f: fromArray(this.filtered),
			s: fromArray(this.selected),
		};

		const deflated: ExperimentsRecord = deflate(state, 'l');

		for (const domain of cookieDomains) {
			setJsonCookie(CookieKey.CandidateIds, deflated, { domain, millis: DAYS_30 });
		}
	}

	/**
	 * Sweeps out all candidates from `list` that belong to the same experiment as `candidateId`.
	 *
	 * @param list
	 * @param candidateId
	 */
	private sweepOut(list: Set<PlanId>, candidateId: CandidateId) {
		const { eid } = toEidCidPair(candidateId);
		subtract(list, (cid) => belongsToExperiment(cid, eid));
	}
}
