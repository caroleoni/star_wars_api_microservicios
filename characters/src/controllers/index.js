const { catchedAsync } = require('../utils');

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters.js')),
    getByIdCharacter: catchedAsync(require('./getByIdCharacter')),
    createCharacter: catchedAsync(require('./createCharacter.js'))
}