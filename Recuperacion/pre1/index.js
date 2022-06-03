//Cramos el servidor
const express = require('express');
const app = express();
const PUERTO=3000;

//Creamos el parametro solicitado (v1/v2)
const parametro = process.env.parametro || 'v1';

//Realizamos una condición para la impresión de datos dependiendo del parámetro
app.get('/api/prueba', (req, res)=>{
    if(parametro == 'v1'){
        return res.status(200).send({message:"Ruta 1"})
    }
    if(parametro == 'v2'){
        return res.status(200).send({message:"Ruta 2"})
    }
})

//Iniciamos el servidor y mandamos un mensaje para saber que está corriendo
app.listen(PUERTO, ()=>{
    console.log('Servidor ejecutandose en puerto ' +PUERTO)
})

