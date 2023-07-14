const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const obj = req.body;
    const newCharacter = await Character.create(obj);
    response(res, 201, newCharacter.data);

};