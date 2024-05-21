// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

const numeros = [5, 8, 19, 22]
function numero(x) {
  return x % 2 === 0;
} 
const resultado = numeros.filter(numero);
console.table(resultado);