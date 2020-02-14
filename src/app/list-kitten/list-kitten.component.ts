import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-kitten",
  templateUrl: "./list-kitten.component.html",
  styleUrls: ["./list-kitten.component.scss"]
})
export class ListKittenComponent implements OnInit {
  UnChat = {
    image:
      "https://i.pinimg.com/236x/2d/9a/65/2d9a65f21c85a9fd317ee574aa35019d.jpg",
    name: "Chacrebleu",
    marque: "Volvo",
    age: "1"
  };

  LeChatDuForm = {};

  constructor() {}

  ngOnInit(): void {}
}
