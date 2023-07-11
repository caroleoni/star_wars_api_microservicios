module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res).catch((err) => {
            next(err); //al hacer un next del error, estoy diciendo, tenemos un error? saltemos al manejador de errores de express
        })
    }
};

//Estas funciones se las llama funciones de orden superior 