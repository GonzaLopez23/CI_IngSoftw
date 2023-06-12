// Importar la clase Producto
const Producto = require('./Producto');

// Test unitario
test('El precio del producto no debe ser menor a 0', () => {
  // Caso de prueba 1: Precio positivo
  const producto1 = new Producto('Camiseta', 10);
  expect(producto1.precio).toBe(10); // El precio es 10, se espera 10

  // Caso de prueba 2: Precio igual a 0
  const producto2 = new Producto('Zapatos', 0);
  expect(producto2.precio).toBe(0); // El precio es 0, se espera 0

  // Caso de prueba 3: Precio negativo (debe lanzar un error)
  expect(() => {
    new Producto('Pantalones', -5);
  }).toThrowError('El precio no puede ser menor a 0.'); // Se espera que lance un error con el mensaje indicado
});
