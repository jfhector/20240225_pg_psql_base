const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Set up PostgreSQL client using Pool
const pool = new Pool({
  user: 'asdfg', // Replace 'your_username' with your PostgreSQL username
  host: 'localhost',
  database: 'my_psql_db', // Replace 'your_database' with your database name
  password: '12345', // Replace 'your_password' with your database password
  port: 5432, // Default PostgreSQL port
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define a route
app.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM example_table'); // Replace 'your_table' with your table name
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
