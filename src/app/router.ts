import express from 'express';
import { getTodos, postTodo, deleteTodo } from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/todos', getTodos);
app.post('/todos', postTodo);
app.delete('/todos/:id', deleteTodo);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
