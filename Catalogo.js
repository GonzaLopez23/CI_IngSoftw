class Catalogo {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos.map(producto => ({
      nombre: producto.getNombre(),
      precio: producto.getPrecio()
    }));
  }
}

module.exports = Catalogo;
