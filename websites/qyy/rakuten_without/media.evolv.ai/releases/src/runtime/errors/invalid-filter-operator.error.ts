
export class InvalidFilterOperator extends Error {
	constructor(field: string) {
		super(`Invalid filter operator for field '${field}'.`);
	}
}
