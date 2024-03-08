import { getTodosFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;

export const getTodos: RequestHandler = async (_, res, next) => {
  try {
    const todos = await getTodosFromDb();
    res.set('Content-Type', 'application/vnd+jfhector.todos-app-todos+json').json(todos);
  } catch (err: any) {
    next(err);
  }  
}
