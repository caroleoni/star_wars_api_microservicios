const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require("../middlewares");

const router = Router();

router.get('/planets', controllers.getPlanets);
router.get('/planets/:id', controllers.getByIdPlanet);
router.post('planets', middleware.planetValidation, controllers.createPlanet);

module.exports = router;