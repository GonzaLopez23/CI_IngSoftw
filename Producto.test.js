const Producto = require('./Producto');

test('El precio del producto menor a 0 devuelve error', () => {
  expect(() => {
    const producto2 = new Producto();
    producto2.setPrecio(-5);
  }).toThrowError('El precio no debe ser menor a 0.');
});

test('Descripcion del producto menor a 10 caracteres devuelve error', () => {
  expect(() => {
    const producto1 = new Producto();
    producto1.setDescripcion("");
  }).toThrowError('La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres.');
});

test('Descripcion del producto menor a 10 caracteres devuelve error', () => {
  const producto1 = new Producto();
  producto1.setDescripcion("Zapatillas");
  expect(typeof{producto1.getDescripcion()}).toBeInstanceOf('string');
  
});
