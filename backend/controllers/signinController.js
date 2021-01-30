const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signin = async(req,res,next) =>{
    let body = req.body;
    try {
        User.findOne({email:body.email},(err, user) =>{
            if(!user){
                console.log('Usuario no valido')
                next()
            } else if( body.clave !== user.clave){
                console.log('Clave no valida')
                next()
            } else{
                console.log("coincide")
                let token = jwt.sign({_id:user._id},'secret', {expireIn: '12h'})
                res.json({
                    ok: true, token, _id: user._id
                })
            }
        })
    } catch (error) {
        console.log(error)
        next();
    }
}