import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnInit {
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostBinding("style.backgroundColor") myBackgroundColor: string;
  constructor() {}

  ngOnInit() {}

  // @HostListener("mouseenter") mouseEnterEvent(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     "background-color",
  //     "yellow"
  //   );
  // }

  // @HostListener("mouseleave") mouseLeaveEvent(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     "background-color",
  //     "transparent"
  //   );
  // }

  @HostListener("mouseenter") mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = "yellow";
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = "transparent";
  }
}
