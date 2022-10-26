export const MUTEX_KEY = 'evolv:mutex';

export const DAY_IN_MILLIS = 24 * 60 * 60 * 1000;
export const DAYS_30 = 30 * DAY_IN_MILLIS;
export const YEARS_2 = 2 * 365 * DAY_IN_MILLIS;

// Constant enums will be inlined by TypeScript compiler

export const enum Mark {
	ElapsedSinceInteractive = 'elapsed-since-interactive',
	ElapsedSinceStart = 'elapsed-since-start',
	ExecutionPlanRetrieved = 'execution-plan-retrieved',
	ReadyStateComplete = 'ready-state-complete',
	ReadyStateInteractive = 'ready-state-interactive',
	ReadyStateLoading = 'ready-state-loading'
}

export const enum QueryParamKey {
	Bridge = 'ascend-editor-bridge'
}

export const enum ReconciliationMode {
	Leave = 'leave',
	Revert = 'revert'
}
