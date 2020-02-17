import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-magic-oven",
  templateUrl: "./magic-oven.component.html",
  styleUrls: ["./magic-oven.component.scss"]
})
export class MagicOvenComponent implements OnInit {
  @Input()
  numberOfCookies: number;

  @Input()
  flour: number;

  @Input()
  salt: number;

  @Input()
  sugar: number;

  @Input()
  egg: number;

  @Input()
  startCooking: boolean;

  @Output()
  getCookies: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendCookies() {
    this.getCookies.emit(this.numberOfCookies);
  }
}
