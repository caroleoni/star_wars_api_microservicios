const { catchedAsync } = require('../utils');

module.exports = {
    getFilms: catchedAsync(require('./getFilms.js')),
    getByIdFilm: catchedAsync(require('./getByIdFilm')),
    createFilm: catchedAsync(require('./createFilm'))
}