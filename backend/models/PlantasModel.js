const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Categoria = require('./CategoriaModel')
const { schema } = require('./UserModel')

const plantasSchema = new Schema(
    {
        nombre:{
            type: String,
            trim: true,
            require: true
        },
        descripcion:{
            type: String,
            trim: true,
            require: true
        },
        stock:{
            type: Number,
            trim: true,
            require: true
        },
        precio:{
            type: Number,
            trim: true,
            require: true
        },
        categoria:{
            type: Schema.Types.ObjectId,
            ref:"Categoria",
            require: true
        }
    }
)

module.exports = mongoose.model("Plantas", plantasSchema)