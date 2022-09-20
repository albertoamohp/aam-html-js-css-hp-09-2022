import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculadora';
  input = '';
  result = 0;

  update(val: string) {
    this.input += val;
  }

  clear() {
    this.input = '';
    this.result = 0;
  }

  calc() {
    this.result = Function("return " + this.input)();
  }
}
