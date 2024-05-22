// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)
const array = [1, 2, 3, 4, 5]
function numero(x) {
  return x !== 3;
}
const arreglo = _.takeWhile(array, numero)
console.log(arreglo)