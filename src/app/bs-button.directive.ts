import {Directive, ElementRef, Input, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit{
  @Input() appBsButton;
  @Input() mouseDownClass;
  constructor(
    private el: ElementRef,
    // renderer already been depreciated
    // private renderer: Renderer
  ) { }
  // @HostListener will cancel the listening when element been killed
  ngOnInit() {
    const button = (this.el.nativeElement as HTMLElement);
    // button.classList.add('btn');
    button.classList.add(this.appBsButton || 'primary');
  }
  @HostListener('mouseDown') onMouseDown() {
    // this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);
    // // 加入mousedown的樣式
    // this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup') onMouseUp() {
    // // 移除mousedown的樣式
    // this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);
    // // 加入原來的樣式
    // this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }
}
