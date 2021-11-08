const numero = -2345;

let nada = Math.sign(numero);
let newNumber = numero.toString().split('').reverse().join('');

console.log(parseInt(newNumber)*-1);
