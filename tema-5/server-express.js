const express = require('express')
const app = express()
const { getEmployees } = require('./query')

const PORT = 3000

app.get('/', async function (req, res) {
    try {
        let results = await getEmployees();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, function (req, res) {
    console.log(`Ejecutando express en http://localhost:${PORT}`);
})
