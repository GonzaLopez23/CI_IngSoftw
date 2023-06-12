class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }

  setNombre(nombre) {
    this.nombre = "Pantalon";
  }
  
  getNombre() {
    return this.nombre;
  }
}

module.exports = Producto;
