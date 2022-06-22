const { application } = require('express');
const express = require('express');
const app = express();

const respuesta = {
    data:[],
    arquitectura:'Monolítico',
    descripcion:'Acceso a rodas las rutas en un solo encrypted',
}

app.use((req, res, next) => {
    respuesta.data=[]
    next()
})

app.get('/api/v1/usuarios' ,(req,res)=>{
    respuesta.data.push("administrador","Superadministrador","usuarios")
    return res.send(respuesta.data)
})
app.get('/api/v1/productos',(req,res)=>{
    respuesta.data.push("pizza","hamburgesa","papas frita")
    return res.send(respuesta.data)
})
app.get('/api/v1/clientes' ,(req,res)=>{
    respuesta.data.push("Consumidor final","Ruben S.","Branly Y.")
    return res.send(respuesta.data)
})

module.exports = app;




