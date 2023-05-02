const myController = require('')
const express = require('express')
const router = express.Router();
router.route('/').get();
router.route('/agregaralgo').get();

module.exports = router;