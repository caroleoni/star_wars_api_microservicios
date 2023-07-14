const { Router } = require("express");
// const { Character } = require("../database");
const { validateModel } = require("../middleware");
const { catchedAsync } = require("../utils")

//En vez de llamar a cada uno de los modulos, creamos una variable store:
const store = require("../database");
//y en lugar de hacer una ruta get para cada uno de los modulos, utilizamos una para los 3 modulos

const router = Router();


//recibe el modelo, por ruta
router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list()
    res.status(200).json(response);
});
router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);

});

router.post("/:model", validateModel, catchedAsync( async (req, res) => {
    const { model } = req.params;
    const obj = req.body;
    const response = await store[model].insert(obj);
    res.status(201).json("Successfully created!")
}))

// router.get("/characters", async (req, res) => {
//     const response = await Character.list()
//     res.status(200).json(response)
// });

module.exports = router;

