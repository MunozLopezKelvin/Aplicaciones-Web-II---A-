import { Servicio } from '../Models'
import { Servicios } from '../Interfaces'
import { Request, Response } from 'express'

const obtenerServicios = async (req:Request,res:Response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { estado:true };
    const [total, datos] = await Promise.all([
        Servicio.countDocuments(query),
        Servicio.find(query)
    ])
res.json([
    total,
    datos
])
}


const obtenerServicio = async (req:Request,res:Response)=>{
    const SERVICIO_ID = req.params;
    const servicio: Servicios | null = (await Servicio.findOne(SERVICIO_ID));
    if(!servicio){
            
        return res.status(400).json({status:'No es una ID valida >:c'})
    }
    res.json({servicio, msg: SERVICIO_ID});
}


const crearServicio = async (req:Request,res:Response)=>{
    const {Estado, ...body} = req.body;
    const servicio = new Servicio(body);
    const ServicioNuevo = await servicio.save();
    res.status(201).json(ServicioNuevo);
}


const actualizarServicio = async (req:Request,res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body;
    const ServicioModificado = await Servicio.findByIdAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(ServicioModificado);
}


const borrarServicio = async (req:Request,res:Response)=>{
    const id = req.params;
    const ServicioBorrado = await Servicio.findByIdAndUpdate(id, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(ServicioBorrado);
}

export {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    borrarServicio
}