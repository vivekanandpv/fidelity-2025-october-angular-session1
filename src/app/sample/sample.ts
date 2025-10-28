import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.scss',
})
export class Sample {
  // message = input<string>();
  // message = input<string>('default message');

  message = input.required<string>();

  onMessageSent = output<string>();

  clickHandler() {
    this.onMessageSent.emit('Hello from child component');
  }
}
