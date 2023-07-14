const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const idCharacter = await Character.getId(id);
    response(res, 200, idCharacter.data)
}