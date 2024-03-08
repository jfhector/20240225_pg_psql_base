import { isRFC7807Error } from '../../utils/RFC7807Error';
import { getTodosFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;

export const getTodos: RequestHandler = async (_, res) => {
  try {
    const todos = await getTodosFromDb();
    res.set('Content-Type', 'application/vnd+jfhector.todos-app-todos+json').json(todos);
  } catch (e: any) {
    if (isRFC7807Error(e)) {
      res.set('Content-Type', 'application/problem+json').json(e.toJson());
    } else {
      res.set('Content-Type', 'application/problem+json').json({
        status,
        type: e.type || 'Unknown',
        title: 'Unexpected error occurred',
        detail: e.detail || e.message,
      })
    }
  }  
}
