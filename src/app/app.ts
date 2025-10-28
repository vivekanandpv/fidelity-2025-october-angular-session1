import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  @ViewChild('myP') pEl!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.pEl.nativeElement.textContent);
  }
}
