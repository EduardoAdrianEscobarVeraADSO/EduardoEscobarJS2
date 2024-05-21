// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

fetch("animales.json").then(respuesta => respuesta.json()).then(datos => {
    let letra = datos.filter(letra => letra.tipo[0]==="A")

    letra.forEach(dato => {
    console.log(dato)

  });
})
