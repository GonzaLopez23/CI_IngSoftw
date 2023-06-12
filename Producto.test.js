const Producto = require('./Producto');

test('El precio del producto no debe ser menor a 0', () => {
  const producto1 = new Producto('Camiseta', 10);
  expect(producto1.getPrecio).toBe(10);

  const producto2 = new Producto('Zapatos', 0);
  expect(producto2.getPrecio).toBe(0);

  expect(() => {
    new Producto('Pantalones', -5);
  }).toThrowError('El precio no debe ser menor a 0.');
});
