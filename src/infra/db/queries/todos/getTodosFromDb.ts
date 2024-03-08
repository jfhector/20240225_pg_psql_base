import { ToDo } from 'src/app/routes/schemas';
import { InternalServerError } from '../../../errors';
import { pool } from '../../setup/pool'; // Q? How to use dependency injection here?
import { TODOS_TABLE } from './const';

export async function getTodosFromDb (): Promise<Array<ToDo>> {
    try {
        const { rows: todos} = await pool.query(`SELECT * FROM ${TODOS_TABLE}`); // Q? What would Knex add?
        return todos as Array<ToDo>;
    } catch (e) {
        throw new InternalServerError()
    }
}
