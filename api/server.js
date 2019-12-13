const express = require('express');
const RecipeRouter = require('./recipe-router.js');

const server = express();

server.use(express.json());
server.use('/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'All work and no play makes Jack a dull boy'});
})

module.exports = server;