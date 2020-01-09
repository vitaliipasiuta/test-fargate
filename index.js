const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.json(process.env));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
