// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch("animales.json").then(respuesta => respuesta.json()).then(datos => {
  console.log(datos)
})