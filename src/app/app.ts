import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1); //  also works
    // this.count.update((v) => v + 1); //  recommended; captures earlier value
  }
}
