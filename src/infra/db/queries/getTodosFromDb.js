import { pool } from '../setup/pool.js'; // Q? How to use dependency injection here?

export async function getTodosFromDb () {
    debugger;
    try {
        const { rows: todos} = await pool.query('SELECT * FROM example_table');
        return todos;
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
