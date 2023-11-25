const express = require('express');
const app = express();

const PORT = 6001;
const HOST = 'localhost';

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello its me');
});

app.get('/posts/:id', (req, res) => {
    const {id} = req.params;
    res.send((`this is your id: ${id}`))
});

app.post('/posts', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201);
})

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);
})