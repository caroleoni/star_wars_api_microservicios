module.exports = {
    response: require('./response.js'),
    catchedAsync: require('./catchedAsync'),
    //esta funcion de errors es para manejar los status 500, 400, 201, 200 ect
    errors: require('./errors')
};