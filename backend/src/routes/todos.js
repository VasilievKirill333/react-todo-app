const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/todos - get all tasks
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY created_at ASC');
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

//POST /api/todos - create task
router.post('/', async (req, res) => {
    const { text } = req.body;
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Text is required'});
    }
    try {
        const result = await pool.query(
            'INSERT INTO todos (text) VALUES ($1) RETURNING *',
            [text]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create todos'});
    }
});

// PATCH /api/todos/:id - update task (text or/and done)
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { text, done } = req.body;
    try {
        const result = await pool.query(
            `UPDATE todos
       SET text = COALESCE($1, text),
           done = COALESCE($2, done)
       WHERE id = $3
       RETURNING *`,
       [text, done, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

// DELETE /api/todos/:id - delete task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Failed to delte todo'});
    }
});

module.exports = router;