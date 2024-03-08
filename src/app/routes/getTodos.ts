import { getTodosFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { sendErrorResponse } from '../utils/sendErrorResponse';

export const getTodos: RequestHandler = async (_, res) => {
  try {
    const todos = await getTodosFromDb();
    res.set('Content-Type', 'application/vnd+jfhector.todos-app-todos+json').json(todos);
  } catch (err: any) {
    sendErrorResponse(res, err);
  }  
}
