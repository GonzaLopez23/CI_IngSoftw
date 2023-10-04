const Producto = require('./Producto'); // Asegúrate de que la ruta sea correcta

describe('Producto Integration Test', () => {
  let producto;

  beforeEach(() => {
    producto = new Producto();
  });

  it('should set and get the nombre correctly', () => {
    producto.setNombre('Producto de Prueba');
    expect(producto.getNombre()).toBe('Producto de Prueba');
  });

  it('should set and get the precio correctly', () => {
    producto.setPrecio(25.99);
    expect(producto.getPrecio()).toBe(25.99);
  });

  it('should throw an error when precio is less than 0', () => {
    expect(() => producto.setPrecio(-10)).toThrow(
      'El precio no debe ser menor a 0.'
    );
  });

  it('should set and get the descripcion correctly', () => {
    producto.setDescripcion('Descripción de prueba');
    expect(producto.getDescripcion()).toBe('Descripción de prueba');
  });

  it('should set and get the marca correctly', () => {
    producto.setMarca('Marca de Prueba');
    expect(producto.getMarca()).toBe('Marca de Prueba');
  });

  it('should throw an error when marca length is greater than 15', () => {
    expect(() => producto.setMarca('A Very Long Brand Name')).toThrow(
      'La marca del producto no debe tener más de 15 caracteres.'
    );
  });
});
