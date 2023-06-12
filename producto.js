class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }

  setNombre(nombre) {
    this.nombre = "";
  }
  
  getNombre() {
    return this.nombre;
  }
}

module.exports = Producto;
