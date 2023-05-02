const myController = require('../Controllers/myController')
const express = require('express')
const router = express.Router();

//defino rutas y acciones de respuesta
router.route('/').get(myController.inicio);
router.route('/agregaralgo').get(myController.agregar);

module.exports = router;