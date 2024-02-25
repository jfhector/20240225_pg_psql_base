export async function getData (req, res, pool) {
    try {
      console.log("try beg");
      const { rows } = await pool.query('SELECT * FROM example_table');
      console.log("rows", rows);
      res.json(rows);
    } catch (err) {
      console.log("catch beg");
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }