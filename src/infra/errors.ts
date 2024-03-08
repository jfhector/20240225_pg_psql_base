import { ErrorContext, RFC7807Error } from "../utils/RFC7807Error"

export class InternalServerError extends RFC7807Error {
	constructor(detail?: string, context?: ErrorContext) {
		super({... context, type: 'InternalServerError', title: 'There was an internal server error', status: 500, detail})
	}
}
