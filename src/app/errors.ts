// See https://github.com/XenZoneGroup/engineering-playbooks/blob/main/docs/architecture_decision_records/0002-http-api-design-error-response-shape.md

export type Issue = {
  dataPath: string
  keyword: string
  message: any
  params?: any
}

export type RFC7807ErrorBody = {
  type: string
  title?: string
  status?: number
  issues?: Issue[]
  detail?: string
  instance?: string
}

export type RFC7807ErrorBodyWithIssues = RFC7807ErrorBody & { issues: Issue[] }

export class RFC7807Error extends Error {
  constructor(private readonly body: RFC7807ErrorBody) {
    super(body.title)
  }
  get type() {
    return this.body.type
  }
  get title() {
    return this.body.title
  }
  get status() {
    return this.body.status
  }
  get issues() {
    return this.body.issues
  }
  get detail() {
    return this.body.detail
  }
  get instance() {
    return this.body.instance
  }

  toJson(): RFC7807ErrorBody {
    return this.body
  }
}

//TODO: This is incorrect
export const isRFC7807Error = (e: any): e is RFC7807Error => {
  return Boolean(e.type)
}

export type ErrorContext = {
  detail?: string
  instance?: string
  issues?: Issue[]
}

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
