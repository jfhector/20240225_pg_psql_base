import { InternalServerError } from '../../../errors';
import { pool } from '../../setup/pool'; // Q? How to use dependency injection here?
import { TODOS_TABLE } from './const';

interface DeleteTodoFromDb {
    (id: string): Promise<void>
}

const deleteTodoFromDb: DeleteTodoFromDb = async (id) => {
    const queryText = `DELETE FROM ${TODOS_TABLE} WHERE id = ${id}`;
    try {
        await pool.query(queryText); // Q? What would Knex add?
    } catch (e) {
        throw new InternalServerError('Error while deleting row todo from db')
    }
}

export { deleteTodoFromDb };
