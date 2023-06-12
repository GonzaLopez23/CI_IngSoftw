const Producto = require('./Producto');

test('El precio del producto no debe ser menor a 0', () => {
  const producto1 = new Producto('Camiseta', -5);
  expect(producto1.precio).toBe(10);

  const producto2 = new Producto('Zapatos', 0);
  expect(producto2.precio).toBe(0);

  expect(() => {
    new Producto('Pantalones', -5);
  }).toThrowError('El precio no debe ser menor a 0.');
});
