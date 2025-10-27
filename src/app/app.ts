import { Component } from '@angular/core';
import { CurrencyClonePipe } from './currency-clone-pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyClonePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  price: number = 900.4567;
}
