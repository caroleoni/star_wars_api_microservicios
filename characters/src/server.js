const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(require('./routes'));

//para manejar los errores de express
server.use('*', (req, res) => {
    res.status(404).json('Not found');
});

//aca sobreesciribimos el manejador de express
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message
    })
});

module.exports = server;