const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/envs.js");

//mongodb+srv://<username>:<password>@cluster0.uvy4oqo.mongodb.net/
const conn = mongoose.createConnection(MONGO_URL);

//Aca tenemos definido el modelo del personaje
// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/filmSchema"));

//Para poder hacer una prueba rapida, y ver si fuciona, sin tener que hacer rutas y probarlo:
// Character.find()
//   .populate('films', ['_id', 'title'])
//   .populate('homeworld', ['_id', 'name'])
//   .then((res) => console.log(res[4]))

  module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))
  }
