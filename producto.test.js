test('testGetNombre', () => {
  const producto1 = new Producto('Remera');
  // Verifica que el método getNombre devuelve 'Remera'
  expect(producto1.getNombre()).toBe('Remera');
});
