import { Component, signal } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  cities = signal(['Chennai', 'Bengaluru', 'Mumbai', 'Indore']);

  users = signal<User[]>([
    {
      firstName: 'John',
      lastName: 'Doe',
      role: 'admin',
    },
    {
      firstName: 'Alice',
      lastName: 'J',
      role: 'user',
    },
    {
      firstName: 'Bob',
      lastName: 'Mallory',
      role: 'manager',
    },
  ]);

  trackUserByRole(user: User): string {
    return `${user.firstName}-${user.lastName}-${user.role}`;
  }
}
