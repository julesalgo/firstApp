import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kitchen",
  templateUrl: "./kitchen.component.html",
  styleUrls: ["./kitchen.component.scss"]
})
export class KitchenComponent implements OnInit {
  flourQuantity: number;
  saltQuantity: number;
  sugarQuantity: number;
  eggQuantity: number;
  numberOfCookies: number;

  cook = false;

  cookiesCooked: number = 0;

  constructor() {}

  ngOnInit() {}

  startCooking() {
    this.cook = true;
  }

  onGetCookies($event) {
    this.cook = false;
    this.cookiesCooked = +$event;
  }
}
