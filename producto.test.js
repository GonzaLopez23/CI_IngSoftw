
test('Validar precio de producto positivo', () => {
const productoCreado = require('./producto.js');
expect(() => {
  productoCreado.setPrecio(-100.0); // asignamos un precio negativo
 }).toThrow('El precio del producto no debe ser menor a 0');
});
