export type UniqueId = string;

export const uniqueIdRegex = /^\d+_\d+$/;

/**
 * The entropy and millisecond level granularity are required
 * to sufficiently reduce collisions in high traffic scenarios.
 *
 * @description
 * This is provided to avoid the extra weight of the code
 * needed to generate UUIDs.
 */
export function uniqueId(): UniqueId {
	const prefix = Math.round(Math.random() * 100000000);
	const date = Date.now();

	return `${prefix}_${date}`;
}
