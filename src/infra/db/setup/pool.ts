import pg from 'pg';

// Set up PostgreSQL client using Pool
const pool = new pg.Pool({
    user: 'asdfg', // Replace 'your_username' with your PostgreSQL username
    host: 'localhost',
    database: 'todos_app_db',
    password: '12345', // Replace 'your_password' with your database password
    port: 5432, // Default PostgreSQL port
  });

export { pool };