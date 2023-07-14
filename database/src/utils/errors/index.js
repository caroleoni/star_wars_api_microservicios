//aqui creamos una clase de error, automaticamente para poder decirle te doy un mensaje y un statusCode
//para que cuando este error, ahora ya personalizado llegue al manejador de errores, tenga una propiedad
//que es statusCode y pueda enviar el error con ese statusCode.

class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message),
        this.statusCode = statusCode
    }
};

module.exports = { ClientError }; //esto va dentro de un objeto porque, me esta trayendo a errors a todos los
//errors de la carpeta