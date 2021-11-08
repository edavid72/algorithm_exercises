const capitalizeLetters = (str) => {
  //Implementación
  if (typeof str !== 'string') {
    throw new Error('no valido');
  } else {
    return str.replace(/\w\S*/g, function (palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
  }
};

module.exports = {
  capitalizeLetters,
};
