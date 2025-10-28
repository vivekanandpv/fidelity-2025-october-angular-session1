import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { Sample } from './sample/sample';

@Component({
  selector: 'app-root',
  imports: [Sample],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  //  Component query is an advanced technique, where you are querying the components
  //  that you used in the template, so that you can configure them to work with your component
  //  This technique is used when you want to associate a paginator with a table, where both table and paginator
  //  are separate components and yet, they have to work together.
  //  Avoid the temptation to manipulate the components in this way! It can result in a spaghetti code.
  //  Always prefer the most declarative and idiomatic way of Angular development.

  @ViewChild(Sample) sample!: Sample;

  parentMessage = signal('Good afternoon!');

  messageHandler(m: string) {
    console.log('Parent component got:', m);
  }

  ngAfterViewInit(): void {
    console.log(this.sample.message());
  }
}
