const express = require('express');
const router = express.Router();
const {listarPublicaciones} = require('../controller/publicacionesController')
router.get('/publicacion', listarPublicaciones);


module.exports= router;