// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

const numeros = [6, 7, 17, 25]
function numero(x) {
  return x % 2 === 0;
}
const resultado = numeros.some(numero);
console.table(resultado);
