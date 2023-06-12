require('./producto.js')
test('Validar precio de producto positivo', () => {
const productoCreado = new Producto();
expect(() => {
  productoCreado.setPrecio(-100.0); // asignamos un precio negativo
 }).toThrow('El precio del producto no debe ser menor a 0');
});

  testValidarLongitudDescripcionProducto() {
    const productoCreado = new Producto();
    const descripcionProducto = "Zapatilla";
    try {
      productoCreado.setDescripcion(descripcionProducto);
    } catch (error) {
      // Verificar que se lanzó una excepción
      expect(error.message).toBe("La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres");
    }
  }

  testValidarMarcaProductoIsString() {
    const productoCreado = new Producto();
    const marcaProducto = "Adidas";
    productoCreado.setMarca(marcaProducto);
    const marca = productoCreado.getMarca();
    expect(typeof marca).toBe("string");
  }

  testValidarExceptionLongitudMarca() {
    const productoCreado = new Producto();
    const marcaProducto = "Puma Ignite Limitless";
    try {
      productoCreado.setMarca(marcaProducto);
    } catch (error) {
      // Verificar que se lanzó una excepción
      expect(error.message).toBe("La marca del producto no debe tener más de 15 caracteres");
    }
  }
