import { Directive, HostBinding, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  host: {
    '[className]': 'appMyClass()',
  },
})
export class MyClass {
  //  Traditional approach (non-signal aware)
  //  To make these dynamic, you have to use @Input constructs

  // @HostBinding('style.color')
  // color = '#8f0a32';

  // @HostBinding('style.fontSize')
  // size = '2rem';

  // @HostListener('click', ['$event'])
  // handler(ar: any) {
  //   console.log('clicked!', ar);
  // }

  // Here @HostBinding doesn't work! For using the modern API, look at the host in the metadata section!
  appMyClass = input<string>();

  constructor() {}
}
