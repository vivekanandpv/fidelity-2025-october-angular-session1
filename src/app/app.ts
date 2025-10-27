import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  price: number = 987; //  : -> type-annotation

  handleClick() {
    console.log('Button clicked!');
  }

  handleInput(e: Event) {
    const element = e.target as HTMLInputElement;

    if (element.name === 'input1') {
      console.log('Input1 text', element.value); //  as -> type-assertion
    }

    if (element.name === 'input2') {
      console.log('Input2 text', element.value); //  as -> type-assertion
    }
  }
}
