/*
//Para importar
const funcionesx = require("./funciones");       
//o podemos desestructurarla
const{iva,funcion1} = require("./funciones");

//Para mostrar el valor de las variables
console.log(funcionesx.iva);
console.log(funcionesx.saludar);
console.log(funcionesx.funcion1(2,7,"+"));
*/


function operacion(n1,n2,operador)
{
    switch (operador) {
        case "+":
            return n1+n2;

        case "-":
            return n1-n2;

        case "*":
            return n1*n2;

        case "/":
            return n1/n2;

        default:
            return 0;
    }
}

function saludar(nombre)
{
    //console.log('');
    return `hola ${nombre}`

}

exports.module = {
    iva:12,
    funcion1:operacion,
    saludar,
}