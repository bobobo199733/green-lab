export interface Logger {
	debug(message: any, ...extra: any[]): void;

	error(message: any, ...extra: any[]): void;

	info(message: any, ...extra: any[]): void;

	log(message: any, ...extra: any[]): void;

	warn(message: any, ...extra: any[]): void;

	clone(...extraTags: string[]): Logger;
}

export function loggerFactory(...tags: string[]): Logger {
	const additional = tags.map(t => `[${t}]`);
	const tag = `[Evolv]${additional.join('')}`;

	return {
		/*@__PURE__*/
		debug(message: any, ...extra: any[]) {
			// tslint:disable-next-line:no-console
			console.debug(tag, message, ...extra);
		},

		/*@__PURE__*/
		error(message: any, ...extra: any[]) {
			console.error(tag, message, ...extra);
		},

		/*@__PURE__*/
		info(message: any, ...extra: any[]) {
			console.info(tag, message, ...extra);
		},

		/*@__PURE__*/
		log(message: any, ...extra: any[]) {
			console.log(tag, message, ...extra);
		},

		/*@__PURE__*/
		warn(message: any, ...extra: any[]) {
			console.warn(tag, message, ...extra);
		},

		clone(...extraTags: string[]) {
			return loggerFactory(...tags, ...extraTags);
		}
	};
}
