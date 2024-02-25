export async function getData (req, res, client) {
    try {
      const { rows } = await client.query('SELECT * FROM example_table'); // Replace 'your_table' with your table name
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }