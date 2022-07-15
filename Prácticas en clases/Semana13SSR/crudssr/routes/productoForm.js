const express = require('express');
const router = express.Router();
const axios= require('axios');
const { request } = require('express');

const httpAxios= axios.create({
    baseURL: `http://localhost:2500/v1/sextoa/api/`
})

router.post('/producto/operar',(req, res, next)=>{
    if(req.body._id=="")
    {
        httpAxios.post(`productos`,{
            nombre:req.body.nombre,
            precio:req.body.precio,
            costo:req.body.costo,
            minimo:req.body.minimo,
            stock:req.body.stock,   
        }).then(respuesta=>{
            request.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`productos/${req}`)
    }
})