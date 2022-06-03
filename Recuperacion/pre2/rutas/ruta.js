const express = require('express');
const vehiculoss = require('../persistencias/arreglo');
const route = express.Router();
const {    
    Buscar,
    Guardar} 
= require('../controladores/index')


route.get('/buscar',Buscar)

route.post('/agregar',Guardar)




module.exports=route