const { response } = require('express');
const { Establecimiento } = require('../persistence');

const obtenerEstablecimientos = async (req,res = response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { estado:true };
    const [total, datos] = await Promise.all([
        Establecimiento.countDocuments(query),
        Establecimiento.find(query)
    ])

res.json([
    total,
    datos
])
}


const crearEstablecimiento = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const EstablecimientoExiste = await Establecimiento.findOne({ESTABLECIMIENTO_NOMBRE:body.ESTABLECIMIENTO_NOMBRE});

    if (EstablecimientoExiste){
        res.status(400).json({
            message:`El Establecimiento con esa placa ya existe ${EstablecimientoExiste.ESTABLECIMIENTO_NOMBRE}`
        })
    }
    const establecimiento = new Establecimiento(body);
    const EstablecimientoNuevo = await establecimiento.save();
    res.status(201).json(EstablecimientoNuevo);
}



module.exports = {
    obtenerEstablecimientos,
    crearEstablecimiento
}