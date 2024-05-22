// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.
const lista = [1, 2, 3, 4, 5]

async function asincrona(){
  const proceso = lista.forEach(lista => {
    console.log(lista)
  })
}

