import { isRFC7807Error } from 'src/utils/RFC7807Error';
import { getTodosFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;

export const getTodos: RequestHandler = async (_, res) => {
  try {
    const todos = await getTodosFromDb();
    res.json(todos);
  } catch (e: any) {
    if (isRFC7807Error(e)) {
      res.json(e.toJson())
    } else {
      res.json({
        status,
        type: e.type || 'Unknown',
        title: 'Unexpected error occurred',
        detail: e.detail || e.message,
      })
    }
  }  
}
