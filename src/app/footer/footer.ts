import { Component } from '@angular/core';
import { Sample } from '../sample/sample';

@Component({
  selector: 'app-footer',
  imports: [Sample],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
