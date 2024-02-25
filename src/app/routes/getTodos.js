export async function getTodos (req, res, pool) {
    try {
      const { rows } = await pool.query('SELECT * FROM example_table');
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
