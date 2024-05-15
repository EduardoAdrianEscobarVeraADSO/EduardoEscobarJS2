// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

// let desde = parseInt(prompt("introduzca desde donde comenzara: "));
// let hasta = parseInt(prompt("introduzca hasta donde terminara: "));
// let contador = desde;

// // opcion 1
// let interval = setInterval(function imprimirNumeros() {
//   console.log(contador)
//   contador++
//   if (contador > hasta){
//     clearInterval(interval)
//   }
// }, 1000);

// function imprimirNumeros(desde, hasta) {
//   let contador = desde;
//   setTimeout(function numeros() {
//     console.log(contador);
//     if (contador < hasta) {
//       contador++
//       setTimeout(numeros, 1000);
//     }
//   }, 1000);
// }
// imprimirNumeros(desde, hasta)