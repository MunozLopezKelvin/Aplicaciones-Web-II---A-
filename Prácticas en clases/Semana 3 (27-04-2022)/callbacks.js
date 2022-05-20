const comida=[
    {
        id:1,
        nombre:'Ceviche',
        idbebida:3
    },
    {
        id:2,
        nombre:'Encebollado',
        idbebida:1
    },
    {
        id:3,
        nombre:'Pizza',
        idbebida:2
    },
    {
        id:4,
        nombre:'Hamburguesa',
        idbebida:4
    },

]

const bebida=[
    {
        id:1,
        nombre:'Frutaris'
    },
    {
        id:2,
        nombre:'Pepsi'
    },
    {
        id:3,
        nombre:'Cola Gallito'
    },
    {
        id:4,
        nombre:'Coca Cola'
    },

]

function buscarComidaPorId(id, callback)
{
    const com  = comida.find((com)=> com.id=== id);
   if(!com)
   {
    const error =new Error();
    error.message='Plato no disponible';  
    return callback(error)
   }
    return callback(null, com);
}


function buscarBebidaPorId(id, callback)
{
    const beb = bebida.find((beb) => beb.id ===id);
    if(!beb)
    {
        const error = new Error();
        error.message='Bebida no encontrada';
        return callback(error)

    }
    return callback(null, beb);
}


buscarComidaPorId(3,(err, comida)=>{
    if(err){
        console.log(err.message);
        return;
    }

    buscarBebidaPorId(comida.idbebida ,(err, bebida)=>{
        if(err)
        {
            console.log(err.message);
            return;
        }
        comida.bebida = bebida;
        delete comida.idbebida;
        console.log(comida);
    })
})