
// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined


const numeros = [7, 7, 18, 25]
function numero(x) {
  return x % 2 === 0;
}
const resultado = numeros.findIndex(numero);
console.table(resultado);
