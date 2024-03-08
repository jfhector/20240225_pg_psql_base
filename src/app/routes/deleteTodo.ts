import { deleteTodoFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { sendErrorResponse } from '../utils/sendErrorResponse';

export const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTodoFromDb(id);
    res.status(200).json({ message: 'Todo deleted successfully, if it existed' });
    
  } catch (err: any) {
    sendErrorResponse(res, err);
  }
}
