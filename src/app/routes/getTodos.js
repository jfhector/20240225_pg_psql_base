import { getTodosFromDb } from '../../infra/db/index.js';

export async function getTodos (req, res) {
  const todos = await getTodosFromDb(); // Q? How to handle the fact that this may fail? look at errors classes; but also how to know whether need to use a try-catch again?
  res.json(todos);
}
