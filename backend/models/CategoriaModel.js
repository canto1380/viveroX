const mongoose = require('mongoose')
const schema = mongoose.Schema

const categoriaSchema = schema (
    {
        descripcion: {
            type: String,
            trim: true,
            require: true
        }
    }
)

module.exports = mongoose.model("Categoria", categoriaSchema)