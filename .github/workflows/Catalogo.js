class Catalogo {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos.map(
      producto => ({
        nombre: producto.getNombre(),
        precio: producto.getPrecio(),
      }),
    );
  }

  buscarProductoPorNombre(nombre) {
    return this.productos.filter(
      producto =>
        producto.getNombre() === nombre,
    );
  }
}

module.exports = Catalogo;
