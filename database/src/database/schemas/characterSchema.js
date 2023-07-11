const { Schema } = require("mongoose");

// el id en mongo lo define como: Schema.Types.ObjectId, normalmente, pero como este id es un string, entonces se indica : String
const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, //en esta como hay pocas opciones se puede colocar directamente [male, n/a, female, unknown]
  homeworld: { type: String, ref: "Planet" }, //este string es un referencia del id de planeta
  films: [{ type: String, ref: "Film" }], //este array es una referencia del id de peliculas
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
    return await this.create(character)
}

module.exports = characterSchema;
