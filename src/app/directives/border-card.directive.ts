import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[biereBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 

    this.setBorder('#8DADB2');
  }

  @Input('biereBorderCard') borderColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#000000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#8DADB2')
  }


  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

}
