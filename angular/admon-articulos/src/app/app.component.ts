import { Component, OnInit } from '@angular/core';
import { articulo } from './articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admon-articulos';
  articulos: articulo[] = [
    {
      codigo: '1',
      descripcion: 'papas',
      precio: 10.55,
    },
    {
      codigo: '2',
      descripcion: 'manzanas',
      precio: 12.1,
    },
    {
      codigo: '3',
      descripcion: 'melon',
      precio: 52.3,
    },
    {
      codigo: '4',
      descripcion: 'cebollas',
      precio: 17,
    },
    {
      codigo: '5',
      descripcion: 'calabaza',
      precio: 20,
    },
  ];

  articuloMostrar: articulo = {
    codigo: '',
    descripcion: '',
    precio: 0,
  };

  ngOnInit() {}

  seleccionar(codigo: string) {
    let valor = this.articulos.find(
      (item) => item.codigo === codigo
    ) as articulo;

    this.articuloMostrar = { ...valor };
  }

  addArticulo(codigo: string, descripcion: string, precio: number) {
    let encontrado = false;
    for (let articulo of this.articulos) {
      console.log(articulo.codigo,codigo);
      if (articulo.codigo === codigo) {
        encontrado = true;
      }
    }

    if(!encontrado) {
      this.articulos.push({codigo,descripcion,precio});
    }
  }

  modify() {
    console.log('entro en modify');
    let index = this.articulos.findIndex(
      (x) => x.codigo == this.articuloMostrar.codigo
    );
    this.articulos[index] = this.articuloMostrar;
  }

  borrar(codigo:string) {
    let index = this.articulos.findIndex(
      (x) => x.codigo == this.articuloMostrar.codigo
    );

    this.articulos.splice(index,1)
  }
}
