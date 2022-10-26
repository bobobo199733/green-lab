
export type UndefinedPropertyNames<T> = { [K in keyof T]: T[K] extends undefined ? K : never }[keyof T];
export type DefinedPropertyNames<T> = { [K in keyof T]: T[K] extends undefined ? never : K }[keyof T];

export type DefinedProperties<T> = Pick<T, DefinedPropertyNames<T>>;
export type UndefinedProperties<T> = Pick<T, UndefinedPropertyNames<T>>;

/**
 * Returns a copy of the given object where properties with the value of undefined are omitted.
 *
 * @param obj
 */
export function omitUndefined<T extends Record<string, any>>(obj: T): DefinedProperties<T> {
	return Object.keys(obj).reduce((acc, key) => {
		if (obj[key] !== undefined) {
			(acc as any)[key] = obj[key];
		}

		return acc;
	}, {} as any);
}


