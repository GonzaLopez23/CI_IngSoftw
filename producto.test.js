const Producto = require('./producto');

test('testGetNombre', () => {
  const producto1 = new Producto("Camisa");
  // Verifica que el método getNombre devuelve 'Remera'
  expect(producto1.getNombre()).toBe('Pantalon');
});

test('testSetNombre', () => {
  const producto1 = new Producto('Zapatilla');
  producto1.setNombre();
  // Verifica que el método setNombre actualice correctamente el nombre
  expect(producto1.getNombre()).toBe('Zapatilla');
});
