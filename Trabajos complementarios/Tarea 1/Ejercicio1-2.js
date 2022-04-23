class Comidas{
    constructor(nombre,ingredientes,tipo,region,acompanante)
    {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tipo = tipo;
        this.region = region;
        this.acompanante = acompanante;
    }
    
}
let Viche = new Comidas('Viche','Pescado, Maní, Camote, Choclo...','Plato Fuerte','Costero', 'Arroz');

console.log(Viche);