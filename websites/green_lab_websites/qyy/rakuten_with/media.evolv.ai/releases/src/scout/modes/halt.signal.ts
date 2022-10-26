export class HaltSignal {
	public readonly message: string;

	constructor(reason: string) {
		this.message = `Halting further execution: ${reason}`;
	}
}
