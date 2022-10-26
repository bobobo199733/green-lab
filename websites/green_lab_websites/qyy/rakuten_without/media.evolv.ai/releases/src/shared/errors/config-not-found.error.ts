export class ConfigNotFoundError extends Error {
	constructor() {
		super(`Configuration not found. The Evolv script tag must specify the 'data-evolv-environment' attribute`);
	}
}
