import express from 'express';
import pg from 'pg';
import { getTodos } from './routes/getTodos.js';

const app = express();
const port = 3000;

// Set up PostgreSQL client using Pool
const pool = new pg.Pool({
  user: 'asdfg', // Replace 'your_username' with your PostgreSQL username
  host: 'localhost',
  database: 'my_psql_db', // Replace 'your_database' with your database name
  password: '12345', // Replace 'your_password' with your database password
  port: 5432, // Default PostgreSQL port
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/todos', (req, res) => getTodos(req, res, pool));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
