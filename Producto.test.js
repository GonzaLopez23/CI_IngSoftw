const Producto = require('./Producto');

test('El precio del producto no debe ser menor a 0', () => {
  const producto1 = new Producto('Camiseta', 20);
  expect(producto1.precio).toBe(10);

  expect(() => {
    new Producto('Pantalones', -5);
  }).toThrowError('El precio no debe ser menor a 0.');
});
