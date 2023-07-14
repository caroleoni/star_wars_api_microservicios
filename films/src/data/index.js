// const films = require('./films.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Film")
    },
    getId: async (id) => {
        return await axios.get("http://database:8004/Film")
    },
    create: async (obj) => {
        return await axios.post("http://database:8004/Film", obj)
    }
}
