import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[biereHeightCard]'
})
export class HeightCardDirective {

  constructor(private el: ElementRef) { 

    this.setHeight(300);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

}
