import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  @Input() appAutofocus: boolean;
  private el: any;
  constructor(private elementRef: ElementRef, ) {
    this.el = this.elementRef.nativeElement;
  }
  ngOnInit() {

    setTimeout(() => {
      this.el.focus();
    }, 300);

  }
}
