/**
 * A wrapper for ensuring that arguments are passed by reference rather than by value.
 */
export class Ref<T> {
	get current() {
		return this.value;
	}

	set current(value: T) {
		this.value = value;
	}

	constructor (private value: T) {}
}
