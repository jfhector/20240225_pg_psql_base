import { Response } from 'express';
import { isRFC7807Error } from "../../utils/RFC7807Error"

export function sendErrorResponse(res: Response<any, Record<string, any>>, err: any) {
    res.set('Content-Type', 'application/problem+json');

    if (isRFC7807Error(err)) {
        res.json(err.toJson())
      } else {
        res.json({
          status,
          type: err.type || 'Unknown',
          title: 'Unexpected error occurred',
          detail: err.detail || err.message,
        })
      }
}