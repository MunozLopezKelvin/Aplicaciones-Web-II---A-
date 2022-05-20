//Dependecias ocupadas
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app= express();
const ruta = express.Router();
//Puerto de enlace
const PUERTO=3000;

let comidas=[];

app.use(cors()).use(express.json());


ruta.get('/',(req,res)=>{
    res.status(200).send(comidas);
})

//Método post con validado
ruta.post('/',(req,res)=>{
    const {body}= req;

    if(comidas.filter(c=>c.codigo===body).length>0)
    {
        return res.status(400).send({
            message:'El codigo ya existe',
            response: body
        })
    }

    comidas.push(body);
    res.status(201).send({
        message:'El dato se insertó correctamente',
        response:body
    })
})

//Método put 'Modificar' validado
ruta.put('/',(req,res)=>{
   const{codigo, descripcion, tipo} = req.body;
   //Verificamos si un archivo existe
   if(comidas.filter(c=>c.codigo===codigo).length==0)
   {
      return res.status(400).send({
           message:'No se encuentra disponible la comida a modificar'
       })
   }
   let comida=comidas.filter(c=>c.codigo===codigo)[0];
   comida.descripcion=descripcion;
   comida.tipo=tipo;
   res.status(200).send({
       message:'Dato modificado con exito',
       response: comida
   })
})

//metodo para eliminar
ruta.delete('/:codigo',(req,res)=>{
const {codigo} = req.params;
comida=comidas.filter(c=>c.codigo !==codigo);
res.status(200).send({
    message:'Plato eliminado del menú'
})
})

//metodo get (buscar)
ruta.get('/:codigo',(req,res)=>{
    const {codigo} = req.params;
    comida=comidas.filter(c=>c.codigo ===codigo);
    if(comida.length>0){
        res.status(200).send({
            message:'Dato encontrado',
            response:comida[0]
        })
    }
    else{
        res.status(400).send({
            message:'Comida con este codigo no existe'
        })
    }
})


app.use('/comida')
app.listen(PUERTO, ()=>{
    console.log('Servidor funcionando en http://localhost: '+PUERTO)
})
