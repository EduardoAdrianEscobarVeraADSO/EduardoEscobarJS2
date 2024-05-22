// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

let resultado1, resultado2, resultado3;

primeraPromesa
  .then((resultado) => {
    resultado1 = resultado;
    console.log(`Resultado de la primera promesa: ${resultado1}`);
    return new Promise((resolve) => {
      setTimeout(() => resolve(resultado1 + 2), 1000);
    });
  })
  .then((resultado) => {
    resultado2 = resultado;
    console.log(`Resultado de la segunda promesa: ${resultado2}`);
    return new Promise((resolve) => {
      setTimeout(() => resolve(resultado2 + 2), 1000);
    });
  })
  .then((resultado) => {
    resultado3 = resultado;
    console.log(`Resultado de la tercera promesa: ${resultado3}`);
    return resultado3 + 2;
  })
  .then((resultadoFinal) => {
    const sumaResultados = resultado1 + resultado2 + resultado3;
    console.log("Suma de resultados:", sumaResultados);
  })
  