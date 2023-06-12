const Producto = require('./Producto');

test('El precio del producto no debe ser menor a 0', () => {
  const producto1 = new Producto();
  producto1.setPrecio(10);
  expect(producto1.precio).toBe(10);

  expect(() => {
    const producto2 new Producto();
    producto2.setPrecio(-5);
  }).toThrowError('El precio no debe ser menor a 0.');
});
