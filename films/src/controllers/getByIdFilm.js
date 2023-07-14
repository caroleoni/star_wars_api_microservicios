const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const idFilm = Film.getId(id)
    response(res, 200, idFilm.data)
} 