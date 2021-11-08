const reverseInt = (number) => {
  //Implementación
  //Validar
  if (typeof number === 'number') {
    let newNumber = number.toString().split('').reverse().join('');

    return parseInt(newNumber);
  }

  throw new Error('Tipo de Dato no Admitido');
};

module.exports = {
  reverseInt,
};
