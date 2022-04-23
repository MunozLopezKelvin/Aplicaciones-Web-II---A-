Array.prototype.toUpperCase = function() {
    return this.map(mayus => mayus.toUpperCase())
  };
  const comida=[
    'viCHe',
    'cAsuELa',
    'hAMburGuesa',
    'sALchiPapa',
    'emPaNAdaS',
    ].toUpperCase();
    console.log('Comidas típicas')
    for (const comfav of comida) {
    console.log(`[-] ${comfav}`);
  }