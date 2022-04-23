const ComidaFavorita = [
    {Nombre: 'Viche', Ingredientes: 'Pescado, Maní, Camote, Choclo...', Tipo: 'Plato fuerte', Region: 'Costero', Acompanante: 'Arroz' },
    {Nombre: 'Ceviche', Ingredientes: 'Pescado, Limón, Sal, Tomate, Cebolla...', Tipo: 'Plato fuerte' , Region: 'Costero', Acompanante: 'Chifle'},
    {Nombre: 'Encebollado', Ingredientes: 'Pescado, Yuca, Cebolla, Cilantro...', Tipo: 'Plato fuerte', Region: 'Costero', Acompanante: 'Chifle '},
    ];
    console.log("--- Método FOR ---")
    for (const comfav of ComidaFavorita) {
        console.log(comfav);
      }

    console.log("\n--- Método FOR EACH ---")
    ComidaFavorita.forEach(comfav => console.log(comfav));

    console.log("\n--- Método DO WHILE ---")
    let x = 0;
    do{
        console.log(ComidaFavorita[x])
        x++;
    }while(x < ComidaFavorita.length);

    console.log("\n--- Método WHILE ---")
    let y = 0;
    while (y<ComidaFavorita.length){
        console.log(ComidaFavorita[y]);
        y++;
    }