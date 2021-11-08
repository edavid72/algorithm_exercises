const reverseString = (str) => {
  //Implementación
  //Validar que str sea un string
  if (typeof str === 'string' && str.length > 1 && str.length < 15) {
    let charArray = str.split('').reverse();
    return charArray.join('');
  }

  //para evitar el 'else'
  throw new Error('Argumento no valido');
};

module.exports = {
  reverseString,
};
