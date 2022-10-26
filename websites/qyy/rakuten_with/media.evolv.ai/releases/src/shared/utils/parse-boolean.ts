export function parseBoolean<T>(value: any): T extends 'true' ? true : T extends 'false' ? false : T {
	return (value === 'false')
		? false
		: (value === 'true')
			? true
			: value;
}
