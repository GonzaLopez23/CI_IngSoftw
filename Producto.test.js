const Producto = require('./Producto');

test('El precio del producto menor a 0 devuelve error', () => {
  expect(() => {
    const productoCreado = new Producto();
    productoCreado.setPrecio(-5);
  }).toThrowError('El precio debe ser menor a 0.');
});

test('Descripcion del producto menor a 10 caracteres devuelve error', () => {
  expect(() => {
    const productoCreado = new Producto();
    productoCreado.setDescripcion("");
  }).toThrowError('La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres.');
});

test('Descripcion del producto es de tipo String', () => {
  const productoCreado = new Producto();
  productoCreado.setDescripcion("Zapatillas");
  const description = productoCreado.getDescripcion();
  expect(typeof description).toBe('string');
});

test('Marca del producto mayor a 15 caracteres devuelve error', () => {
  expect(() => {
    const productoCreado = new Producto();
    productoCreado.setMarca("Puma Ignite Limitless");
  }).toThrowError('La marca del producto no debe tener más de 15 caracteres.');
});
