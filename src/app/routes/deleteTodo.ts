import { deleteTodoFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteTodoFromDb(id);
    res.status(200).json({ message: 'Todo deleted successfully, if it existed' });
    
  } catch (err: any) {
    next(err);
  }
}
