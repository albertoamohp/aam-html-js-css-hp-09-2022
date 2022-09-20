import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
let input;

export class AppComponent implements OnInit{
  title = 'homeApp';
  input = '';
  constructor() {};
  ngOnInit() {}

  update(val) {
    this.input += val;
  }

  clear () {
    this.input = '';
  }

  calc() {

  }
}
