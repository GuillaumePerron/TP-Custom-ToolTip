import { ContentChild, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customTooltip]'
})
export class CustomTooltipDirective {

  constructor(private el : ElementRef, private renderer : Renderer2) {
  }

  customTooltipContent!: ElementRef;

  customTooltipPosition: String = 'bottom';

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.customTooltipContent.nativeElement,'visibility','visible');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.customTooltipContent.nativeElement,'visibility','hidden');
  }
  ngAfterContentInit(){
    this.onMouseLeave()
    this.customTooltipPosition;
    let infoElem = this.el.nativeElement.getBoundingClientRect();
    console.log(infoElem);
    
    let infoToolTip = this.customTooltipContent.nativeElement.getBoundingClientRect();
    if (infoElem.y > infoToolTip.height){
      this.renderer.setStyle(this.customTooltipContent.nativeElement,'top',infoElem.width/2);
    }
    else if (infoElem.x > infoToolTip.width){
      this.renderer.setStyle(this.customTooltipContent.nativeElement,'top',infoElem.width/2);
    }
  }
}
