const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    //ruta para home

    router.get('/', proyectosController.controllerDashboard);

    router.get('/usuarios', proyectosController.controllerUsuarios);

    return router;

}