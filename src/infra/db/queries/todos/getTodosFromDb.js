import { pool } from '../../setup/pool.js'; // Q? How to use dependency injection here?
import { TODOS_TABLE } from './const.js';

export async function getTodosFromDb () {
    debugger;
    try {
        const { rows: todos} = await pool.query(`SELECT * FROM ${TODOS_TABLE}`); // Q? What would Knex add?
        return todos;
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
