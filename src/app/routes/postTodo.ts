import { writeNewTodoToDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { todoSchema } from './schemas' ;

export const postTodo: RequestHandler = async (req, res) => {
  try { // TODO USE MIDDLEWARE, SEE CHAT REQUEST SERVICE
    todoSchema.parse(req.body);
  } catch (e) {
    res.status(400).send({ error: (e as any).errors }); // TODO TYPE // TODO ERROR: DON'T LEAK ERROR
  }

  const {name, done} = req.body; // TODO Add schema and type safety
  try {
    await writeNewTodoToDb({name, done}); // Q? How to handle the fact that this may fail? look at errors classes; but also how to know whether need to use a try-catch again?
    res.status(201).send();
  } catch (e) {
    res.status(500).send();
  }
}
