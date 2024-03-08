import { writeNewTodoToDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { todoSchema, ToDo } from './schemas' ;
import { SchemaValidationError } from '../errors';
import { isRFC7807Error } from '../../utils/RFC7807Error';

// TODO USE MIDDLEWARE, SEE CHAT REQUEST SERVICE
const validateRequestBody = (requestBody: any): ToDo => {
  try { 
    return todoSchema.parse(requestBody);
  } catch (e) {
    throw new SchemaValidationError()
  }
}

export const postTodo: RequestHandler = async (req, res) => {
  try {
    const {name, done} = validateRequestBody(req.body)
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
