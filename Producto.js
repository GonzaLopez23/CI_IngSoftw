class Producto {
  constructor() {
   
  }
  
  function setNombre(nombre) {
    this.nombre = nombre;
  }
  
  function getNombre() {
    return this.nombre;
  }
  
  function setPrecio(precio) {
    if (precio < 0) {
      throw new Error('El precio no debe ser menor a 0.');
    }
    this.precio = precio;
  }
  
  function getPrecio() {
    return this.precio;
  }
  
  function setDescripcion(descripcion){
    if (descripcion.length < 10 || descripcion.length > 256) {
      throw new Error('La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres.');
    } else {
      this.descripcion = descripcion; 
    }
  }
}

module.exports = Producto;
