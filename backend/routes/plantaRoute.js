const express = require('express')
const router = express.Router();
const plantasController = require('../controllers/plantasController');

module.exports = function() {
    /**Agregar nueva cita **/
    router.post('/addPlanta',
        plantasController.nuevaPlanta
    )
    /** OBTENER LOS REGISTROS DE LA DB **/
    router.get('/listPlantas',
        plantasController.listaPlantas
    )

    /** OBTENER UN PACIENTE ESPECIFICO POR ID */
    router.get('/planta/:id',
        plantasController.buscarPlanta
    )

    /** ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO **/
    router.put('/updatePlanta/:id',
        plantasController.actualizarPlanta
    )

    /** ELIMINAR REGISTRO POR UN ID **/
    router.delete('/removePlanta/:id',
        plantasController.eliminarPlanta
    )

    return router;
}