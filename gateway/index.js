const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/characters', createProxyMiddleware({
    //es donde esta escuchando
    target: 'http://characters:8001',
    //y este le indica que a partir de ahi la require va a continuar a lo que indica target
    changeOrigin: true
}));

app.use('/films', createProxyMiddleware({
    //es donde esta escuchando
    target: 'http://films:8002',
    //y este le indica que a partir de ahi la require va a continuar a lo que indica target
    changeOrigin: true
}));

app.use('/planets', createProxyMiddleware({
    //es donde esta escuchando
    target: 'http://planets:8003',
    //y este le indica que a partir de ahi la require va a continuar a lo que indica target
    changeOrigin: true
}));

app.use('/database', createProxyMiddleware({
    target: 'http://database:8004',
    changeOrigin: true,
}));

app.listen(8000, () => {
    console.log('Gateway on PORT 8000')
})