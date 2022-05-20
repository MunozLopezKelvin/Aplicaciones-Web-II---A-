class Prueba
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    persona = {
        nombre:"",
        apellido:"",
        esDocente:"",
        geolocalizacion:{
            lat:12.3451,
            lng:34.1313,
        },
        prueba: ()=>{
            return this.nombre;
        },
        prueba1: ()=>{
            return this.apellido;
            
        }

    }
}

let personax = new Prueba('Bart', 'Simpson');

console.log(personax.persona.prueba());

console.log(personax.persona.prueba1());



/* 
//Desestructurada:

class Persona
{
   constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto()
    {
        return `${this.nombre} ${this.apellido}`
    }
}

const persona = new Persona("Bart", "Simpson");

console.log(persona.getNombreCompleto());
*/
