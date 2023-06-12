class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }

  setNombre(nombre) {
    this.nombre = 'topper';
  }
  
  getNombre() {
    return this.nombre;
  }
}

module.exports = Producto;
