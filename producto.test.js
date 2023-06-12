// Importar la función que vamos a probar
const verificarPrecio = require('./verificarPrecio');

// Test unitario
test('El precio del producto no debe ser menor a 0', () => {
  // Caso de prueba 1: Precio positivo
  expect(verificarPrecio(10)).toBe(true); // El precio es 10, se espera true

  // Caso de prueba 2: Precio igual a 0
  expect(verificarPrecio(0)).toBe(true); // El precio es 0, se espera true

  // Caso de prueba 3: Precio negativo
  expect(verificarPrecio(-5)).toBe(false); // El precio es -5, se espera false
});
