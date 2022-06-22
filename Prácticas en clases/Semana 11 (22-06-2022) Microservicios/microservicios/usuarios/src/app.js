const express = require('express');
const app = express();

respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Usuarios Microservicio'
}

app.get('/api/v2/usuarios',(req,res) => {
    resoyesta.data=[]
    respuesta.data.push("Administrador", "Superadministrador", "Invitado")
    console.log(`Microservicio de usuarios`);
    return res.send(respuesta);
})
module.exports = app;