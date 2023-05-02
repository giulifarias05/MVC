const express= require('express');
const path =require('path');
const morgan=require('morgan');
const app= express();
const myRouter= require('./Routes/myRouter');

//defino motor de plantillas a utilizar
app.set('view engine', 'ejs');
//defino localizacion de mis vistas
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(morgan('dev'));
//Middlewar para obtener informacion de los request con bodyparser
app.use(express.json());
//configuramos archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//agrego un enrutador compatible
app.use('/',myRouter);
module.exports=app;