import { Espacio } from '../Models'
import { IEspacios } from '../Interfaces'
import { Request, Response } from 'express';
  
const ObtenerEspacios = async ( req: Request, res: Response ) =>{

    const { limite = 10, desde = 0} = req.query 
    const query = {Estado:true};
    const [total, espacios] : [ Number, IEspacios []] = await Promise.all([ 
            Espacio.countDocuments(query),
            Espacio.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ]
    )

    res.json({
        total,
        espacios,
})
}

const ObtenerEspacio = async (  req: Request, res: Response  ) =>{
    const ESPACIO_ID = req.params;
    const espacio:IEspacios | null = (await Espacio.findOne(ESPACIO_ID));
    if(!espacio){
            
        return res.status(400).json({status:'No es una ID valida >:c'})
    }
    res.json(espacio);
}

const CrearEspacio = async ( req: Request, res: Response ) =>{
    const {Estado, ...body} = req.body as IEspacios;
   
    const espacioExiste = await Espacio.findOne({ESPACIO_ID:body.ESPACIO_ID});

    if (espacioExiste){
        res.status(400).json({
            message:`El producto ${body.ESPACIO_ID} ya existe ${espacioExiste.ESPACIO_ID}`
        })
    }
    const espacio = new Espacio(body);
    const espacioNuevo = await espacio.save();
    res.status(201).json(espacioNuevo);
}

const ActualizarEspacio = async (req: Request, res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body;
    const EspacioModificado = await Espacio.findOneAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status:'No es una ID valido', error:err})});
    res.json(EspacioModificado);
}


const BorrarEspacio = async (req: Request, res:Response)=>{
    const id = req.params;
    const EspacioBorrado = await Espacio.findOneAndUpdate(id, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(EspacioBorrado);
}

const RecuperarEspacio = async (req: Request, res:Response)=>{
    const id = req.params;
    const EspacioRecuperado = await Espacio.findOneAndUpdate(id, {Estado:true}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(EspacioRecuperado);
}

export{
    ObtenerEspacios,
    ObtenerEspacio,
    CrearEspacio,
    ActualizarEspacio,
    BorrarEspacio,
    RecuperarEspacio
}
