const Producto = require('./Producto'); 
const Catalogo = require('./Catalogo');

describe('Test de integración', () => {
  it('debería mostrar nombres y precios de productos en el catálogo', () => {
    const producto1 = new Producto();
    producto1.setNombre('Producto 1');
    producto1.setPrecio(100);

    const producto2 = new Producto();
    producto2.setNombre('Producto 2');
    producto2.setPrecio(200);

    const catalogo = new Catalogo();
    catalogo.agregarProducto(producto1);
    catalogo.agregarProducto(producto2);

    const productosEnCatalogo = catalogo.obtenerProductos();

    expect(productosEnCatalogo).toEqual([
      { nombre: 'Producto 1', precio: 100 },
      { nombre: 'Producto 2', precio: 200 }
    ]);
  });
});
