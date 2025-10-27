import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [PercentPipe, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  message: string = 'Good afternoon!';
  roi: number = 0.12;
  price: number = 900.851234;
  today: Date = new Date();
  pi: number = 3.14159265359;
}
