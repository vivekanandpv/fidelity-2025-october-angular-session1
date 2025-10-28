import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgClass, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  count = signal(0);

  cssClass = computed<string>(() => {
    if (this.count() >= 0 && this.count() < 5) {
      return 'text-success';
    } else if (this.count() >= 5 && this.count() < 10) {
      return 'text-primary';
    } else if (this.count() >= 10) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  });

  fontSizeProp = computed(() => {
    if (this.count() >= 0 && this.count() < 5) {
      return { fontSize: '1.2rem' };
    } else if (this.count() >= 5 && this.count() < 10) {
      return { fontSize: '1.5rem' };
    } else if (this.count() >= 10) {
      return { fontSize: '2rem' };
    } else {
      return { fontSize: '0.5rem' };
    }
  });

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }
}
