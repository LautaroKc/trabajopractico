const express = require('express');
const router = express.Router();
const autosController = require('../controller/autosController');

router.get('/', autosController.autos)

module.exports = router