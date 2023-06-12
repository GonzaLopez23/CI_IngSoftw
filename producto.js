class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }

  setNombre(nombre) {
    this.nombre = "Tuki";
  }
  
  getNombre() {
    return this.nombre;
  }
}

module.exports = Producto;
