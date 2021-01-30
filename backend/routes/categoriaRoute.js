const express = require('express');
const router = express.Router();
const categoriaController = require ('../controllers/categoriaController');


module.exports = function() {

    router.post('/addCategoria',
        categoriaController.nuevoCat
    )

    /** OBTENER LOS REGISTROS DE LA DB **/
    router.get('/listCategorias',
        categoriaController.listarCat
    )

    /** OBTENER UN PACIENTE ESPECIFICO POR ID */
    router.get('/categoria/:id',
        categoriaController.buscarCat
            )

    /** ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO **/
    router.put('/updateCategoria/:id',
        categoriaController.actualizarCat
    )

    /** ELIMINAR REGISTRO POR UN ID **/
    router.delete('/removeCategoria/:id',
        categoriaController.eliminarCat
    )
    return router;
} 