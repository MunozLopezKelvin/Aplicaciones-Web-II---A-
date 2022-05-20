//Creacion de servidor
const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO=5000;

app.use(cors()).use(express.json());

app.get("/prueba", (req,res,next)=>{
    next();
},(req,res,next)=>{
    res.status(200).send({mensaje:"Hola mundo"});

})

app.listen(PUERTO, ()=>{
    //console.log('Servidor ejecutandose en puerto ' +PUERTO)
    console.log(`Servidor ejecutandose por el puerto ${PUERTO}`)
})