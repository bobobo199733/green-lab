import { Context } from '../context';
import { AudienceContext } from './audience-context';


export type AudiencePredicate = (audience: AudienceContext) => boolean;
export type MessageFunction = (passed: boolean) => string;

export interface Result {
	passed: boolean;
	message: string | null;
}

export abstract class Filter<M extends Record<string, any> = {}, T = any> {
	public readonly not!: M;

	protected messageFn: MessageFunction;
	protected predicate!: AudiencePredicate;

	constructor(protected context: Context) {
		this.messageFn = (passed) => passed ? `Filter passed` : `Filter blocked`;

		this.not = this.not || {};
		this.includeNots();
	}

	test(audience: AudienceContext): Result {
		const result = this.predicate(audience);

		return {
			passed: result,
			message: result ? null : this.messageFn(result)
		};
	}

	/**
	 * Adds the inverse matcher onto the `not` object of any method decorated with @IncludeNot.
	 */
	private includeNots(): void {
		for (const property of Object.keys(this.not) as (keyof M)[]) {
			// @ts-ignore
			this.not[property] = (...args: any[]) => {
				// @ts-ignore
				this[property](...args);

				const positive = this.predicate;
				const messageFn = this.messageFn;

				this.predicate = function(audience: AudienceContext) {
					return !positive(audience);
				};

				this.messageFn = function(passed: boolean) {
					return messageFn(!passed);
				};
			};
		}
	}
}
