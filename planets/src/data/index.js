// const planets = require('./planets.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Planet")
    },
    getId: async (id) => {
        return await axios.get(`http://database:8004/Planet/${id}`)
    },
    create: async (obj) => {
        return await axios.post("http://database:8004/Planet", obj)
    }
}