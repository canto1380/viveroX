const express =require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const signinController = require('../controllers/signinController')

module.exports = function () {
   router.post('/addUser',
    userController.nuevoUsuario
    )

    router.get('/listUser',
     userController.listarUsuarios
     )

    router.get('/user/:id', 
    userController.buscarUsuario
    )

    router.put('updateUser/:id', 
    userController.actualizarUsuario
    )

    router.delete('/deleteUser/:id', 
    userController.eliminarUsuario
    )

    router.post('/val',
        signinController.signin
    )

    return router;
}