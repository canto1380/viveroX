const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ('body-parser')
const cors = require("cors")
const path = require ('path')
const multer = require ('multer')
const morgan = require('morgan')

/** Rutas **/
const userRoutes = require('./routes/userRoute')
const categoriaRoutes = require('./routes/categoriaRoute')
const plantasRoutes = require('./routes/plantaRoute')

/** Variables para la conexion **/
require('dotenv').config({path:"variables.env"})

const app = express();
app.use(cors())
app.use(morgan('dev'))

/** Configuracion puerto host y server **/
const host = process.env.HOST || '0.0.0.0'
const port = process.env.YOUR_PORT || process.env.PORT || 4000

app.listen(port, host, () =>{
    console.log(`Servidor funcionando en puerto: ${port} y host ${host}`)
})

/** Conexion a MongoDB **/
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

/** Habilitacion de body-parser **/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(multer({dest: path.join(__dirname, 'img/productos' )}).single('image'))

/** Habilitacion de rutas **/
app.use('/usuarios', userRoutes());
app.use('/categorias', categoriaRoutes());
app.use('/plantas', plantasRoutes());