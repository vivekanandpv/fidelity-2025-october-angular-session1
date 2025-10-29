import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked {
  count = input<number>();

  rn: number = Math.random() * 1000;

  constructor() {
    console.log('constructor', this.count());
  }

  changeRandom() {
    this.rn = Math.random() * 1000;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.count());
  }

  ngOnInit(): void {
    console.log('ngOnInit: start of the view processing', this.count());
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: end of the view processing');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: start change-detection');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: end change-detection');
  }
}
