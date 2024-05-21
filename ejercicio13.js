// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.

const promesa = new Promise(resolve => {
  setTimeout(()=> resolve("promise resuelta"), 3000)
})
promesa.then(resultado => alert(resultado))