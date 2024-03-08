import { ErrorContext, RFC7807Error } from "src/utils/RFC7807Error"

export class SchemaValidationError extends RFC7807Error {
	constructor(detail?: string, context?: ErrorContext) {
		super({... context, type: 'SchemaValidationError', title: 'The shape of the request\'s body doesn\'t match what the endpoint expects', status: 400, detail})
	}
}
export class InternalServerError extends RFC7807Error {
	constructor(detail?: string, context?: ErrorContext) {
		super({... context, type: 'InternalServerError', title: 'There was an internal server error', status: 500, detail})
	}
}
export class NotFound extends RFC7807Error {
  constructor(title: string, context?: ErrorContext) {
    super({ ...context, type: 'NotFound', title: title, status: 404 })
  }
}
export class Unauthorized extends RFC7807Error {
  constructor(title: string, context?: ErrorContext) {
    super({ ...context, type: 'Unauthorized', title: title, status: 401 })
  }
}
export class Forbidden extends RFC7807Error {
  constructor(title: string, context?: ErrorContext) {
    super({ ...context, type: 'Forbidden', title: title, status: 403 })
  }
}

// maybe UnprocessableEntity? Feels overly http.
export class BadRequest extends RFC7807Error {
  constructor(title: string, context?: ErrorContext) {
    super({ ...context, type: 'BadRequest', title: title, status: 422 })
  }
}

export class Conflict extends RFC7807Error {
  constructor(title: string, context?: ErrorContext) {
    super({ ...context, type: 'Conflict', title: title, status: 409 })
  }
}
