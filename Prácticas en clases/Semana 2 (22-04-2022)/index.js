let totalFactura=0;
const impuesto=12;

//totalFactura=acumularValores(10);
const  acumularValores =  (tope) => {
    let auxiliarAcumulado=0;
    for (let i=0;i<tope;i+=2)
    {
         auxiliarAcumulado+=i;
    }
    return auxiliarAcumulado;
}
totalFactura=acumularValores(10);
console.log(totalFactura)
