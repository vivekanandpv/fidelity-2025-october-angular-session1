import { Component, signal } from '@angular/core';
import { MyClass } from './my-class';
import { MyIf } from './my-if';

@Component({
  selector: 'app-root',
  imports: [MyClass, MyIf],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  visible = signal(true);

  toggle() {
    this.visible.update((v) => !v);
  }
}
