// 24. Crear un objeto proxy usando la clase Proxy

const eduardo = {
  nombre: "eduardo",
  genero: "varon"
}

const manejador = {
}

let a = new Proxy(eduardo, manejador)