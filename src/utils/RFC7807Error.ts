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
  