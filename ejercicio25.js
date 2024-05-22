// 25. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola


const eduardo = {
  nombre: "",
  genero: "",
  edad: 2, 
  correo: "",
  fecha: ""
}

const manejador = {
  set(obj, property, value) {
    try {
      if ((property === "nombre" || property === "genero") && Number(value)) {
      throw new Error("no se pueden poner numeros en el " + property)
      }
      if (property === "edad" && isNaN(value)) {
        throw new Error("solo numeros")
      }
      if (property === "correo" && !/^[\w\.]+@[a-z]{5,7}\.[a-z]{3}$/.test(value)) {
        throw new Error("correo invalido")
      }
      if (property === "fecha" && !/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(value)) {
        throw new Error("debe ser una fecha")
      }
      if ((property === "nombre" || property === "edad" || property === "correo" || property === "fecha" || property === "genero") && /^\s|\s$/.test(value))  {
        throw new Error("no puede tener espacios en blanco")
      }
      obj[property] = value
    } catch (error) {
      console.error(error)
    }

  }
}

let a = new Proxy(eduardo, manejador)
a.nombre = "eduardo"
a.edad = 1
a.correo = "edu@gmail.com"
a.fecha = "24/05/2024"
a.genero = "hombre"
console.log(eduardo)