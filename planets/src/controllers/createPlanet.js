const Planet = require("../data");
const { response } = require("../utils");

module.exports = async () => {
    const obj = req.body;
    const newPlanet = await Planet.create(obj);
    response(res, 201, newPlanet.data)
}