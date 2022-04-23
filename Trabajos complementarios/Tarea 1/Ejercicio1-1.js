let num;
process.stdout.write("Ingrese un número para generar su tabla de multiplicar: ");
process.stdin.on('data', function(data) {
    num = data.toString().trim();
    process.stdout.write(`Su tabla de multiplicar es la siguiente:\n`);
    for(let i=1; i<13; i++){
    console.log(`${num} * ${i} = ${num * i}`)
   
}
process.exit();
});
