export class DeadlockError extends Error {
	constructor() {
		super('Deadlock detected that may be caused by this lock not being released.');
	}
}
