class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = this.setPrecio(precio);
  }

  setPrecio(precio) {
    if (precio < 0) {
      throw new Error('El precio no debe ser menor a 0.');
    }
    return precio;
  }
  getPrecio () {
    return this.precio;
  }
}

module.exports = Producto;
