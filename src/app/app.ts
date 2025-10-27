import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  message: string = 'Hello, there!';
  title: string = 'This is a title';
  color: string = '#ff001e';
}
