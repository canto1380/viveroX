const Categoria = require('../models/CategoriaModel')

exports.nuevoCat = async (req, res, next) => {
    const categoria = new Categoria(req.body);
    try {
        await categoria.save();
        res.json({mensaje: "Categoria registrado con exito"})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.listarCat = async (req, res, next) => {
    try {
        const categorias = await Categoria.find({});
        res.json(categorias)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.buscarCat = async (req,res,next) =>{
    try {
        const categoria = await Categoria.findById(req.params.id)
        res.json(categoria)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.actualizarCat = async (req, res, next) => {
    try {
        const categoria = await Categoria.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.json(categoria)   
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.eliminarCat = async (req,res, next) => {
    try {
        await Categoria.findOneAndDelete({_id: req.params.id});
        res.json('Eliminado')
    } catch (error) {
        console.log(error)
        next();
    }
}