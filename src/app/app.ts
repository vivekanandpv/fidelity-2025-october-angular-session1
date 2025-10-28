import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyClass } from './my-class';

@Component({
  selector: 'app-root',
  imports: [MyClass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('learning-session1');
}
