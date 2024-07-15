import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  @Input() buttonDefaultBGColor: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() buttonHoverBGColor: string = 'linear-gradient(0deg, rgb(63 4 17) 0%, rgb(181 77 92) 100%)';

  constructor(private el: ElementRef, private rend: Renderer2) {}
    
    @HostListener('mouseenter')
    onMouseenter () {
      this.rend.setStyle(this.el.nativeElement, 'background', this.buttonHoverBGColor);
      // я заметил, что при использовании renderer2 не применяется tansition. Это решаемо?
    }

    @HostListener('mouseleave')
    onMouseleave () {
      this.rend.setStyle(this.el.nativeElement, 'background', this.buttonDefaultBGColor);
    }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'background', this.buttonDefaultBGColor);
  }
}
