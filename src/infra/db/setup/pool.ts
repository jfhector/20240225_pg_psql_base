import pg from 'pg';

// Set up PostgreSQL client using Pool
const pool = new pg.Pool({
    user: 'asdfg', // Replace 'your_username' with your PostgreSQL username
    host: 'localhost',
    database: 'my_psql_db', // Replace 'your_database' with your database name
    password: '12345', // Replace 'your_password' with your database password
    port: 5432, // Default PostgreSQL port
  });

export { pool };