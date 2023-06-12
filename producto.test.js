require('./producto.js')
test('Validar precio de producto positivo', () => {
const productoCreado = new Producto();
expect(() => {
  productoCreado.setPrecio(-100.0); // asignamos un precio negativo
 }).toThrow('El precio del producto no debe ser menor a 0');
});
