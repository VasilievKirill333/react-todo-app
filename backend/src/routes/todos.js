const express = require('express');
const router = express.Router();
const pool = require('../db');

// Максимальное значение типа INTEGER в PostgreSQL
const MAX_INT = 2147483647;

// Текст годный, если это строка и после обрезки пробелов она не пустая
function isValidText(value) {
    return typeof value === 'string' && value.trim() !== '';
}

// Превращает id из URL в число; возвращает null, если id некорректный
function parseId(value) {
    const id = Number(value);
    if (Number.isInteger(id) && id > 0 && id <= MAX_INT) {
        return id;
    }
    return null;
}

// GET /api/todos - get all tasks
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY created_at ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

// POST /api/todos - create task
router.post('/', async (req, res) => {
    const { text } = req.body ?? {};

    if (!isValidText(text)) {
        return res.status(400).json({ error: 'Text must be a non-empty string' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO todos (text) VALUES ($1) RETURNING *',
            [text.trim()]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create todo' });
    }
});

// PATCH /api/todos/:id - update task (text and/or done)
router.patch('/:id', async (req, res) => {
    const id = parseId(req.params.id);
    if (id === null) {
        return res.status(400).json({ error: 'Invalid id' });
    }

    const { text, done } = req.body ?? {};

    if (text === undefined && done === undefined) {
        return res.status(400).json({ error: 'Nothing to update' });
    }
    if (text !== undefined && !isValidText(text)) {
        return res.status(400).json({ error: 'Text must be a non-empty string' });
    }
    if (done !== undefined && typeof done !== 'boolean') {
        return res.status(400).json({ error: 'Done must be true or false' });
    }

    try {
        const result = await pool.query(
            `UPDATE todos
             SET text = COALESCE($1, text),
                 done = COALESCE($2, done)
             WHERE id = $3
             RETURNING *`,
            [text?.trim(), done, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

// DELETE /api/todos/:id - delete task
router.delete('/:id', async (req, res) => {
    const id = parseId(req.params.id);
    if (id === null) {
        return res.status(400).json({ error: 'Invalid id' });
    }

    try {
        const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING id', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

module.exports = router;