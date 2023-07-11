const { catchedAsync } = require('../utils');

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters.js')),
    createCharacter: catchedAsync(require('./createCharacter.js'))
}