const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
    const { name }  = req.body;
    if(name) return next()
    else throw new ClientError('Error en el nombre', 401)
};
//a esta funcion lo coloco en la rutas antes de llegar al controllers-> routes -> index.js