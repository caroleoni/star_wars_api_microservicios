const planets = require('./planets.json');

module.exports = {
    listPlanets: async () => {
        return planets
    }
}