const Planets = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const planets = await Planets.listPlanets();
    response(res, 200, planets.data)
    // res.status(200).json(planets);
}