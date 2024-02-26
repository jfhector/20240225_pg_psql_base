import { pool } from '../../setup/pool'; // Q? How to use dependency injection here?
import { TODOS_TABLE } from './const';

export async function getTodosFromDb () {
    try {
        const { rows: todos} = await pool.query(`SELECT * FROM ${TODOS_TABLE}`); // Q? What would Knex add?
        return todos;
    } catch (err) {
        console.error(err);
        // res.status(500).json({ error: 'Internal server error' }); // TODO Implement error handling
    }
}
