import { writeNewTodoToDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { todoSchema, ToDo } from './schemas' ;
import { SchemaValidationError, isRFC7807Error } from '../errors';

// TODO USE MIDDLEWARE, SEE CHAT REQUEST SERVICE
const validateRequestBody = (requestBody: any): void => {
  try { 
    todoSchema.parse(requestBody);
  } catch (e) {
    throw new SchemaValidationError()
  }
}

export const postTodo: RequestHandler = async (req, res) => {
  try {
    validateRequestBody(req.body)
    const {name, done} = req.body as ToDo; // TODO Get name and done as part of previous line without as
    await writeNewTodoToDb({name, done});
    res.status(201).send();
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
