class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = this.verificarPrecio(precio);
  }

  verificarPrecio(precio) {
    if (precio < 0) {
      throw new Error('El precio no puede ser menor a 0.');
    }
    return precio;
  }
}

module.exports = Producto;
