class Producto {
  constructor() {
    this.precio = 0;
    this.descripcion = "";
    this.marca = "";
  }

  setPrecio(precio) {
    if (precio < 0) {
      throw new Error("El precio del producto no debe ser menor a 0");
    }
    this.precio = precio;
  }

  setDescripcion(descripcion) {
    if (descripcion.length < 10 || descripcion.length > 256) {
      throw new Error("La descripcion del producto no debe tener más de 256 caracteres ni menos de 10 caracteres");
    }
    this.descripcion = descripcion;
  }

  setMarca(marca) {
    if (marca.length > 15) {
      throw new Error("La marca del producto no debe tener más de 15 caracteres");
    }
    this.marca = marca;
  }

  getMarca() {
    return this.marca;
  }
}
