import express from 'express';
import pg from 'pg';
import { getData } from './routes/getData.js';

const app = express();
const port = 3000;

// Set up PostgreSQL client using Pool
const client = new pg.Client({
  user: 'asdfg', // Replace 'your_username' with your PostgreSQL username
  host: 'localhost',
  database: 'my_psql_db', // Replace 'your_database' with your database name
  password: '12345', // Replace 'your_password' with your database password
  port: 5432, // Default PostgreSQL port
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/data', (req, res) => getData(req, res, client));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
