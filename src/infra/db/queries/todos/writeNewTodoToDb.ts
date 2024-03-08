import { InternalServerError } from '../../../../app/errors'; // TODO CONSIDER DEFINING INFRA ERRORS RATHER THAN IMPORTING FROM APP
import { pool } from '../../setup/pool'; // Q? How to use dependency injection here?
import { TODOS_TABLE } from './const';

interface WriteNewToDoToDb {
    (options: {name: string, done?: boolean}): Promise<void>
}

const writeNewTodoToDb: WriteNewToDoToDb = async ({
    name, 
    done
}) => {
    const doneAsString = done ? 'true' : 'false';
    const queryText = `INSERT INTO ${TODOS_TABLE}(name, done) VALUES ($1, $2) RETURNING *`;
    const queryValues = [name, doneAsString];
    try {
        const res = await pool.query(queryText, queryValues); // Q? What would Knex add?
        console.log('inserted', res.rows[0]);
    } catch (e) {
        throw new InternalServerError()
    }
}

export { writeNewTodoToDb };
