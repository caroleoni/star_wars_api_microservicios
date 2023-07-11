const express = require("express");

const app = express();


const PORT = 8004;

app.listen(PORT, () => {
  console.log(`Database service on PORT ${PORT}`);
});

//------------------------------------------------------------------------------
// const { Planet } = require("./src/database");
// Planet.list().then(res => console.log(res[0]));
// Planet.insert({
//     _id: '203',
//     name: 'Planeta tierra',
// }).then(res => console.log(res));
//------------------------------------------------------------------------------------------------------------------
//PRUEBA FILMS -> CON ESTAS FUNCIONES QUE CREAMOS PODEMOS USARLO EN LOS 3 CON EL MISMO NOMBRE DE LAS FUNCIONES-------
// const { Film } = require("./src/database");
// Film.list().then(res => console.log(res[0]));
//-------------------------------------------------------------------------------------------------------------------
//PRUEBA CHARACTERS--------------------------------------------------------------------------------------------------
// const { Character } = require("./src/database");
//En vez de hacer todo esto aca, en characterSchema hacemos una funcion con todo este codigo, en
//este ej. creamos la funcion list
//--------------------------------------------------
// Character.find()
//   .populate("homeworld", ["_id", "name"])
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res[0]));
//--------------------------------------------------
// Character.list().then((res) => console.log(res));
// Character.get(100).then(res => console.log(res));
// Character.insert({
//     _id: "300",
//     name: "Caro Leoni",
//     birth_year: "1983",
// }).then(res => console.log(res))
//-------------------------------------------------------------------------------------------------------------------
