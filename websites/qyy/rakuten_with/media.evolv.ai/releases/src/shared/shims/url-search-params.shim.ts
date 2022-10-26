export class URLSearchParams {
	private entries: [string, string][] = [];

	constructor(search: string = '') {
		search = search.replace(/^\?/, '') || '';
		this.parseToEntries(search);
	}

	/**
	 * Appends a specified key/value pair as a new search parameter.
	 */
	append(name: string, value: string): void {
		this.entries.push([name, value]);
	}

	has(name: string): boolean {
		return this.entries.some(([key]) => key === name);
	}

	get(name: string): string {
		const all = this.getAll(name);
		return all[0];
	}

	getAll(name: string): string[] {
		return this.entries
			.filter(([key]) => key === name)
			.map(entry => entry[1]);
	}

	forEach(callback: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: unknown) {
		for (const [key, value] of this.entries) {
			callback.call(thisArg, value, key, this);
		}
	}

	toString() {
		const params = this.entries.reduce((acc, [key, value]) =>
			acc.concat(`${this.encode(key)}=${this.encode(value)}`)
		, [] as string[]);

		return params.join('&');
	}

	private parseToEntries(search: string) {
		const pairs = search.split('&');
		for (let j = 0; j < pairs.length; j++) {
			const value = pairs[j],
				index = value.indexOf('=');

			if (-1 < index) {
				this.append(this.decode(value.slice(0, index)), this.decode(value.slice(index + 1)));
			} else {
				if (value) {
					this.append(this.decode(value), '');
				}
			}
		}
	}

	private decode(str: string) {
		return str
			.replace(/[ +]/g, '%20')
			.replace(/(%[a-f0-9]{2})+/ig, function(match) {
				return decodeURIComponent(match);
			});
	}

	encode(str: string) {
		const replace: Record<string, string> = {
			'!': '%21',
			"'": '%27', // tslint:disable-line
			'(': '%28',
			')': '%29',
			'~': '%7E',
			'%20': '+',
			'%00': '\x00'
		};
		return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
			return replace[match];
		});
	}

}
