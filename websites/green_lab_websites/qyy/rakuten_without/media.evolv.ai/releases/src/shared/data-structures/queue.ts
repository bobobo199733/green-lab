export class Queue<T> {
	private _items: T[] = [];

	get isEmpty() {
		return this.size === 0;
	}

	get items() {
		return this._items;
	}

	get size() {
		return this.items.length;
	}

	enqueue(item: T) {
		this.items.push(item);
	}

	dequeue(): T | undefined {
		return this.items.shift();
	}
}
