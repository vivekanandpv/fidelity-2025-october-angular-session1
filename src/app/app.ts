import { ChangeDetectionStrategy, Component, DoCheck, signal } from '@angular/core';
import { Demo } from './demo/demo';

@Component({
  selector: 'app-root',
  imports: [Demo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements DoCheck {
  i = signal(0);

  constructor() {
    setInterval(() => {
      // this.i.update((a) => a + 1);
      console.log('Logged');
    }, 2000);
  }

  ngDoCheck(): void {
    console.log('CD Parent');
  }

  increment() {
    // this.i.update((c) => c + 1);
  }
}
