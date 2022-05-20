const comida=[
    "Tigrillo",
    "Bolon de chicharrón",
    "Pizza",
    "Chaulafan",
    "Hamburguesa",
    function(){
        return"Bandera";
    }
] 

/* 
Si deseamos agregar elementos a un arreglo de manera asociativa podemos utilizar:
comidas["x"]="Parrillada";
console.log(comida)
*/


/*
Si queremos mostrar un arreglo en especifico utilizamos:
console.log(comida[5])
Otra alternativa es la que se muestra en las líneas 23 y 24
const funcionA = comida[5];
funcionA;
*/


//Utilizamos [] para clonar
const desayunos = [...comida];
desayunos[3]="yogurt"
console.log(desayunos)

//Si queremos unir arreglos ejecutamos las siguientes líneas de código (34-35)
const unioncomidas=[...comida, ...desayunos];
console.log(unioncomidas)


/*
Si queremos modificar los elementos utilizamos:
comida[0]=["yogurt"];
console.log(comida)
*/
