import { Directive, Input, signal, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIf {
  private hasView = signal(false);

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appMyIf(condition: boolean) {
    if (condition && !this.hasView()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView.set(true);
    } else if (!condition && this.hasView()) {
      this.viewContainerRef.clear();
      this.hasView.set(false);
    }
  }
}
