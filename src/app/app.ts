import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  visible = signal(true);

  language = signal('en');

  person = signal({
    firstName: 'John',
    address: {
      city: {
        location: 'London',
      },
    },
  });

  toggle() {
    this.visible.update((v) => !v);
  }

  changeLanguage() {
    // this.language.set('fr');
    this.language.set('de');
  }
}
