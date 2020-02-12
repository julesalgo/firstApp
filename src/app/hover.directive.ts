import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appHover]"
})
export class HoverDirective implements OnInit {
  @HostBinding("style.backgroundColor") myBackgroundColor: string;
  constructor() {}

  ngOnInit() {}

  @HostListener("mouseenter") mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = "green";
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = "transparent";
  }
}
