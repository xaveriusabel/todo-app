const db = require('../models/db');

exports.getTodos = (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addTodo = (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO todos (title) VALUES (?)', [title], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, title, completed: false });
  });
};
