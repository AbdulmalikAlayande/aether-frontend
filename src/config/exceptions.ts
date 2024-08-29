export class AetherBaseException extends Error {
	public readonly name: string;
	public readonly details?: string;
	public readonly timestamp: Date;

	constructor(message: string, details?: string) {
		super(message);
		this.name = this.constructor.name;
		this.details = details;
		this.timestamp = new Date();

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}

	toString(): string {
		return `${this.name}: ${this.message} (${this.timestamp.toISOString()})${
			this.details ? ` Details: ${this.details}` : ""
		}`;
	}
}

export class SignUpFailedException extends AetherBaseException {
	constructor(message: string, details?: string) {
		super(message, details);
	}
}

export function handleException<T>(fn: () => T): T | null {
	try {
		return fn();
	} catch (error) {
		if (error instanceof AetherBaseException) {
			console.error(error.toString());
			return null;
		} else {
			throw error;
		}
	}
}
