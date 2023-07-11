const { Router } = require("express");
const { Character } = require("../database");

//En vez de llamar a cada uno de los modulos, creamos una variable store:
// const store = require("../database");
//y en lugar de hacer una ruta get para cada uno de los modulos, utilizamos una para los 3 modulos

const router = Router();


//recibe el modelo, por ruta
// router.get("/:model", async (req, res) => {
//     const { model } = req.params;
//     const response = await store[model].list()
//     res.status(200).json(response);
// });

router.get("/characters", async (req, res) => {
    const response = await Character.list()
    res.status(200).json(response)
});

module.exports = router;

