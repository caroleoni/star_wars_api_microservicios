const Planet = require("../data");
const { response } = require("../utils");

module.exports = async () => {
    const { id } = req.params;
    const idPlanet = await Planet.getId(id);
    response(res, 200, idPlanet.data);
}