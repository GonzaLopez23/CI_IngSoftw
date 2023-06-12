const Producto = require('./Producto');

test('El precio del producto no debe ser menor a 0', () => {
  const producto1 = new Producto();
  producto1.setPrecio(10);
  expect(producto1.getPrecio()).toBe(10);

  expect(() => {
    const producto2 = new Producto();
    producto2.setPrecio(-5);
  }).toThrowError('El precio no debe ser menor a 0.');
});

test('Validar longitud de la descripcion del producto', () => {
  expect(() => {
    const producto1 = new Producto();
    producto2.setDescripcion("");
  }).toThrowError('La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres.');
});
