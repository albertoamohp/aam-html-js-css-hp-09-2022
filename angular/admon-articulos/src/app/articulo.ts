export class articulo {
  codigo: string;
  descripcion: string;
  precio: number;

  constructor(codigo: string, descripcion: string, precio: number) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
