import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[heightImageCard]'
})
export class HeightImageCardDirective {

  constructor(private el: ElementRef) { 

    this.setHeight(150);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

}

