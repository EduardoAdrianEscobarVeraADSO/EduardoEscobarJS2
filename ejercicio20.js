// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("primera resuelta"), 1000);
});
  primeraPromesa.then(resultado => console.log(resultado))
const segundaPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("segunda resuelta"), 10000);
});
   segundaPromesa.then(resultado => console.log(resultado))
const terceraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("tercera resuelta"), 3000);
});
   terceraPromesa.then(resultado => console.log(resultado))
  
Promise.all([primeraPromesa, segundaPromesa, terceraPromesa])
  .then(resultado => {
  console.log("todo se resolvio correctamente")
  })
  .catch(error => {
  console.log("algo salio mal")
})