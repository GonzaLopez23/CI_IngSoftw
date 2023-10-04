const Producto = require('./Producto'); // Asegúrate de que la ruta sea correcta

describe('Prueba de Integración de Producto', () => {
  let producto;

  beforeEach(() => {
    producto = new Producto();
  });

  it('debería establecer y obtener el nombre correctamente', () => {
    producto.setNombre('Producto de Prueba');
    expect(producto.getNombre()).toBe('Producto de Prueba');
  });

  it('debería establecer y obtener el precio correctamente', () => {
    producto.setPrecio(25.99);
    expect(producto.getPrecio()).toBe(25.99);
  });

  it('debería lanzar un error cuando el precio es menor que 0', () => {
    expect(() => producto.setPrecio(-10)).toThrow(
      'El precio no debe ser menor a 0.'
    );
  });

  it('debería establecer y obtener la descripción correctamente', () => {
    producto.setDescripcion('Descripción de prueba');
    expect(producto.getDescripcion()).toBe('Descripción de prueba');
  });

  it('debería establecer y obtener la marca correctamente', () => {
    producto.setMarca('Marca de Prueba');
    expect(producto.getMarca()).toBe('Marca de Prueba');
  });

  it('debería lanzar un error cuando la longitud de la marca es mayor que 15', () => {
    expect(() => producto.setMarca('Un Nombre de Marca Muy Largo')).toThrow(
      'La marca del producto no debe tener más de 15 caracteres.'
    );
  });
});
