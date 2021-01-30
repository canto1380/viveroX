const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema(
    {
        nombre:{
            type: String,
            trim: true,
            require: true
        },
        apellido:{
            type: String,
            trim: true,
            require: true
        },
        dni:{
            type: Number,
            trim: true,
            require: true,
            unique: true
        },
        email:{
            type: String,
            trim: true,
            require: true,
            unique: true
        },
        telefono:{
            type: Number,
            trim: true,
            require: true
        },
        direccion:{
            type: String,
            trim: true,
            require: true
        },
        localidad:{
            type: String,
            trim: true,
            require: true
        },
        provincia:{
            type: String,
            trim: true,
            require: true
        },
        pais:{
            type: String,
            trim: true,
            require: true
        },
        clave: {
            type: String,
            trim: true,
            requiere: true,
            minlength: 8
        }
    }
)
module.exports = mongoose.model("Usuarios", userSchema);