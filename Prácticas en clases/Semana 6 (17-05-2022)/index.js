//Creación del servidor

const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO=5000;

app.use(cors()).use(express.json());

app.get("/prueba", (req,res,next)=>{
    next();
},(req,res,next)=>{
    res.status(200).send({mensaje:"Holaaaaaa"});

})

app.use('/prueba',(req,res,next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})




//Para Postman
app.post('/prueba', (req,res,next)=>{
    res.status(201).send(req.body);
    next();
})


app.use('/prueba', (req,res,next)=>{
    console.log('Despues del Middleware');
    //next();
    //res.status(201).send(req.body);

})




app.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutandose por el puerto ${PUERTO}`)
})
