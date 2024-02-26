import express from 'express';
import { getTodos } from './routes/getTodos';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/todos', getTodos);
// app.post('/todos', postTodos);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
