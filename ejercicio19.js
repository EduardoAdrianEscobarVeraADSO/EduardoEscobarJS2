// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.
async function asincrona() {
  let variable = await fetch("animales.json").then(respuesta => respuesta.json()).then(datos => {
      datos.forEach(nom => {
        console.log(nom.tipo)
      });
    })
  
  
}

asincrona()

