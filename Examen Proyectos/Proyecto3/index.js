//Creación del servidor

const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO=5000;

app.use(cors()).use(express.json());

app.get("/prueba", (req,res,next)=>{
    next();
},(req,res,next)=>{
    res.status(200).send({Establecimientos});

})


//Para Postman
app.post('/prueba', (req,res,next)=>{
    res.status(201).send(req.body);
    next();
})
const numero{

    
}
app.post('/prueba',numero)

app.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutandose por el puerto ${PUERTO}`)
})
