import { writeNewTodoToDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { todoSchema, ToDo } from './schemas' ;
import { SchemaValidationError } from '../errors';

// TODO USE MIDDLEWARE, SEE CHAT REQUEST SERVICE
const validateRequestBody = (requestBody: any): ToDo => {
  try { 
    return todoSchema.parse(requestBody);
  } catch (e) {
    throw new SchemaValidationError()
  }
}

export const postTodo: RequestHandler = async (req, res, next) => {
  try {
    const {name, done} = validateRequestBody(req.body)
    await writeNewTodoToDb({name, done});
    res.status(201).send();
  } catch (err: any) {
    next(err);
  }
}
