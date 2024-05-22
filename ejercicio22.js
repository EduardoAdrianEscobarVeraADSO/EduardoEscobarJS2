// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function asincrona() {
  for (const elemento of lista) {
    let promesa = new Promise(resolve => setTimeout(()=> resolve(`procesando elemento ${elemento}`), 1000)) 
    const esperar = await promesa;
    console.log(esperar)
  }
  console.log("COMPLETADO")
}
const lista = [1, 2, 3, 4]
asincrona()