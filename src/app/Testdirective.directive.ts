import { Directive, ElementRef, Input , HostListener } from '@angular/core';

@Directive({
  selector: '[testdirective]'
})

export class TestdirectiveDirective {

    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
       el.nativeElement.style.fontSize = '26px';
      console.log("directive constructor",el);
    }

    @Input('Test') highlightColor: string;


    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = '#633ce0';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = null;
    }

}

