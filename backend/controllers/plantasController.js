const Plantas = require('../models/PlantasModel');
const mongoose = require('mongoose')
const Categoria = require('../models/CategoriaModel');

exports.nuevaPlanta = async (req,res,next) => {
    const plantas = new Plantas(req.body);
    try {
        await plantas.save();
        res.json({mensaje: 'Planta agregada con exito'})
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.listaPlantas = (req, res) => {
    const plantas = Plantas.find({}, function(err, cit) {
        Categoria.populate(cit, {path: "categoria"},function(err, cit) {
            res.status(200).send(cit);
        })
    })
}

exports.buscarPlanta = async (req, res, next) => {
    try {
        const planta = await Plantas.findById(req.params.id)
        res.json(planta)
        console.log(planta)
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.actualizarPlanta = async (req, res, next) => {
    try {
        const planta = await Plantas.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(planta)
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.eliminarPlanta = async (req, res, next) => {
    try {
        await Plantas.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Cita eliminado'})
    } catch (error) {
        console.log(error)
        next(); 
    }
}