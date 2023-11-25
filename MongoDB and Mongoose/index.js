require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoURL = process.env.DATABASE_URL;

mongoose.connect(mongoURL);
const database = mongoose.connection;

database.once('connected', () => {
    console.log('Database connections established');
});

database.on('error', (error) => {
    console.log(error);
})

const PORT = 6001;
const HOST = 'localhost';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
 * BE -> /api/v1/{path}
 * FE -> /users
 * 
 * /api/v1/posts -> GET => return all available posts
 * /api/v1/posts -> POST => add post to collection
 * /api/v1/posts/:id -> GET => return specific post by id
 * /api/v1/posts/:id -> PUT => edit specific post by id
 * /api/v1/posts/:id -> DELETE => delete specific post by id
 */

app.use(require('./routes/index.routes.js')); 

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
})