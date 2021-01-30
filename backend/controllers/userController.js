const User = require ('../models/UserModel')

exports.nuevoUsuario = async (req,res, next) =>{
    const usuario = new User(req.body);
    try {
        await usuario.save();
        res.json({mensaje: "Usuario registrado!"})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.listarUsuarios = async (req,res,next) =>{
    try {
        const usuarios = await User.find({});
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.buscarUsuario = async (req,res,next) =>{
    try {
        const usuario = await User.findById(req.params.id)
        res.json(usuario)
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.actualizarUsuario = async(req,res,next) =>{
    try {
        const usuario = await User.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
        res.json(usuario)
    } catch (error) {
        console.log(error)
        next()
    }
}
exports.eliminarUsuario = async (req,res,next) =>{
    try {
        await User.findOneAndDelete({_id: req.params.id})
        res.json("Usuario eliminado")
    } catch (error) {
        console.log(error)
        next()
    }
}
