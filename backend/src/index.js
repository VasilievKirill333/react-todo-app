const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

const todosRouter = require('./routes/todos');

app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter); 
const openapiPath = path.join(__dirname, '..', 'docs', 'openapi.yaml');
const openapiDocument = YAML.parse(fs.readFileSync(openapiPath, 'utf8'));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running' });
});

app.get('/db-check', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ dbTime: result.rows[0].now });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});