import { deleteTodoFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;
import { isRFC7807Error } from '../../utils/RFC7807Error';

export const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTodoFromDb(id);
    res.status(200).json({ message: 'Todo deleted successfully, if it existed' });
    
  } catch (e: any) {
    if (isRFC7807Error(e)) {
      res.json(e.toJson);
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
