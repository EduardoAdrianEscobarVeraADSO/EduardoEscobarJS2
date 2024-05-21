// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const numeros2 = [6, 7, 17, 25]
const numeros = [1, 3, 5, 7]
function numero(x) {
  return x % 2 === 0;
}
const resultado = numeros.find(numero);
console.table(resultado);