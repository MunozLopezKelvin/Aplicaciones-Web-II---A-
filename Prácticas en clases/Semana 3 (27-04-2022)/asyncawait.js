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

async function buscarComidaPorId(id)
{
    const com  = comida.find((com)=> com.id=== id);
    if (!com)
    {
        const error= new Error();
        error.message=`Comida no disponible`;
        throw error;
    }
    return com;
}


function buscarBebidaPorId(id)
{
    const beb =  bebida.find((beb)=> beb.id===id);
    if (!beb)
    {
        const error = new Error();
        error.message=`Bebida no encontrada`;
        throw error;
    }
    return beb;
}



(async ()=> {
    try {
        const com =   await buscarComidaPorId(4);
        const beb = await buscarBebidaPorId(com.idbebida);
        com.beb= beb;
        delete com.idbebida;
        console.log(com);
    } catch (error) {
        console.log(error.message)
    }
})();