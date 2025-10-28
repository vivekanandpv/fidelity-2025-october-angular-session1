import { Component } from '@angular/core';
import { Sample } from '../sample/sample';

@Component({
  selector: 'app-navbar',
  imports: [Sample],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
