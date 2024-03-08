import { Request, Response, NextFunction } from 'express';
import { isRFC7807Error } from "../../utils/RFC7807Error"

export async function handleError(err: any, req: Request, res: Response, next: NextFunction): Promise<void> {
    console.error(err.stack);
    // await logger.logError(error); TODO
    // await fireMonitoringMetric(error); TODO
    sendErrorResponse(res, err); // TODO OPTIONAL also use this for uncaughtException and unhandledRejection, see 2.4 Handle errors centrally, not within a middleware

    // *********** implementation details

    function sendErrorResponse(res: Response, err: any) {
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
}
