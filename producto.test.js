const Producto = require('./producto');

test('testGetNombre', () => {
  const producto1 = new Producto('Remera');
  // Verifica que el método getNombre devuelve 'Remera'
  expect(producto1.getNombre()).toBe('Remera');
});

test('testSetNombre', () => {
  const producto1 = new Producto();
  producto1.setNombre('Zapatilla');
  // Verifica que el método setNombre actualice correctamente el nombre
  expect(producto1.getNombre()).toBe('Zapatilla');
});