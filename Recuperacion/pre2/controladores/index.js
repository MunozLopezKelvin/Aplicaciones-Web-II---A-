
const establecimientos = require('../persistencias/arreglo');


const Buscar = async(req, res) => {
    res.status(200).send({
        message: 'Los datos que se encuentran almacenados son los siguientes:',
        datos: establecimientos
    });
}

const Guardar = async(req, res) => {
    const {...body} = req.body;
    const save = establecimientos.push(body)

    res.status(201).send({
        message:'El dato se almacenó correctamente',
        response:body
    })

}

module.exports={
    Buscar,
    Guardar
}