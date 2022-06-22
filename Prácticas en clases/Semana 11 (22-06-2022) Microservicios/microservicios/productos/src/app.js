const express = require('express');
const app = express();

respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Productos Microservicio'
}

app.get('/api/v2/productos',(req,res) => {
    resoyesta.data=[]
    respuesta.data.push("hamburgesa", "pizza", "papas frita")
    console.log(`Microservicio de productos`);
    return res.send(respuesta);
})
module.exports = app;