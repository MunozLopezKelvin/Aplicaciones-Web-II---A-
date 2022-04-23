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
    for (const comfav of comida) {
    console.log(comfav);
  }