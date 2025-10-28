import { Component, computed, effect, signal } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  count = signal(0);
  doubleCount = computed(() => {
    console.log('double counter evaluated');
    return this.count() * 2;
  }); //  lazily evaluated, read-only, memoized

  person = signal<Person>({
    firstName: 'John',
    lastName: 'Doe',
  });

  colors = signal(['blue', 'green', 'red']);

  increment() {
    // this.count.set(this.count() + 1);
    this.count.update((v) => v + 1);
  }

  changeDetails() {
    this.person.update(() => ({
      firstName: 'Rajan',
      lastName: 'Kumar',
    }));
  }

  addColor() {
    this.colors.update((a) => [...a, 'black']);
  }

  constructor() {
    //  effect can only be declared in an injection context,
    // so that it is released when the component goes out of scope
    //  This mostly means, you write effects in the constructor.

    //  use effects sparingly
    //  effects are used to cause "side-effects" such as logging, storing to localStorage, etc.
    //  do not set/update signals inside the effects.
    //  effects run asynchronously
    effect(() => {
      console.log('Current counter is:', this.count());
    });
  }
}
