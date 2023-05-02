const OneModel= require('../Models/myModel');
const moment  = require('moment');

//ejemplo de respuesta a peticion GET
exports.inicio=(req,res)=>{
    res.status(200).render('index');
};