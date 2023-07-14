// const characters = require('./characters.json');
const axios = require("axios");


module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Character");
    },
    getId: async (id) => {
        return axios.get(`http://database:8004/Character/${id}`)
    },
    create: async (obj) => {
        return await axios.post("http://database:8004/Character", obj)
    }
}