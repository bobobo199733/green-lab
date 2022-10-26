import { isObject } from './is-object';


/**
 * Gets as property value from an object by a property path.
 *
 * @param {Object} object The object to query.
 * @param {string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
export function get(object: any, path: string): any {
	if (!isObject(object) || !path) {
		return;
	}
	for (let i = 0, parts = path.split('.'), len = parts.length; i < len; i++) {
		object = object[parts[i]];
		if (!object) {
			return object;
		}
	}
	return object;
}
