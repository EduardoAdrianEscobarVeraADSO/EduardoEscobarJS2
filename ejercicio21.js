// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("primera resuelta"), 1000);
});
primeraPromesa.then(resultado => console.log(resultado))
  

const segundaPromesa = new Promise((resolve, reject) => {
  const condicion = false;
  if (condicion) {
    resolve("La promesa se ha cumplido exitosamente");
  } else {
    reject("aaaa");
  }
});
  segundaPromesa.catch(resultado => console.log("error"))

const terceraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("tercera resuelta"), 3000);
});
   terceraPromesa.then(resultado => console.log(resultado))
  
Promise.allSettled([primeraPromesa, segundaPromesa, terceraPromesa])
  .then(resultados => {
    resultados.forEach(resultado => {
      if (resultado.status === "fulfilled") {
        console.log("la promesa se resolvio: ", resultado.value)
      } else if (resultado.status === "rejected") {
        console.log("la promesa fue rechazada: ", resultado.reason)
      }
    })
})