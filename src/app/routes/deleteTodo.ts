import { deleteTodoFromDb } from '../../infra/db/';
import { RequestHandler } from 'express' ;

export const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTodoFromDb(id);
    res.status(200).json({ message: 'Todo deleted successfully, if it existed' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: (error as any).message }); // TODO FIX TYPE
  }
}
