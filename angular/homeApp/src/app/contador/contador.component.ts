import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  constructor() {}
  contador = 0;
  ngOnInit(): void {}

  incrementar() {
    this.contador += 1;
  }

  decrementar() {
    this.contador -= 1;
  }
}
