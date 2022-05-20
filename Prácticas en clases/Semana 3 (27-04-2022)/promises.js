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


function buscarComidaPorId(id)
{
    return new Promise ((resolve, reject)=>{
         const com = comida.find((com)=> com.id === id);
        if(!com)
        {
            const error =new Error();
            error.message='Emparejamiento no disponible';  
            reject(error);
         }
    resolve(com);
})
}

function buscarBebidaPorId(id)
{
    return new Promise ((resolve, reject)=>{
         const beb = bebida.find((beb)=> beb.id === id);
        if(!beb)
        {
            const error =new Error();
            error.message='Equipo no encontrado';  
            reject(error);
         }
    resolve(beb);
})
}


let comAuxi={};


buscarComidaPorId(1).then((com)=>{
    //console.log(com)
    comAuxi = com;
    return buscarBebidaPorId(com.idbebida);
})
.then((beb)=>{
    comAuxi.beb = beb;
    delete comAuxi.idbebida;
    console.log(comAuxi)
})
.catch((motivo)=>{
    console.log(motivo.message)
})