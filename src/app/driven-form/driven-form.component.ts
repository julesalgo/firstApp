import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-driven-form",
  templateUrl: "./driven-form.component.html",
  styleUrls: ["./driven-form.component.scss"]
})
export class DrivenFormComponent implements OnInit {
  model: Order = new Order();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}
export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
}
