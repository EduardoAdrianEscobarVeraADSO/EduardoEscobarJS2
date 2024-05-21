
// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

const numeros = [6, 8, 18, 22]
function numero(x) {
  return x % 2 === 0;
}
const resultado = numeros.every(numero);
console.table(resultado);