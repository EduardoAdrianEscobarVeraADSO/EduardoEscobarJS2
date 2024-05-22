// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

async function error() {
  try {
    let response = await fetch('animales.json');
    if (!response.ok) {
      throw new Error("el archivo no sirve")
    }
    let user = await response.json();
    if (user.length === 0) {
      throw new Error("el archivo esta vacio")
    }
  } catch (error) {
    console.error(error)
  }
}
 error()