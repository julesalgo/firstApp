import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quete-directives",
  templateUrl: "./quete-directives.component.html",
  styleUrls: ["./quete-directives.component.scss"]
})
export class QueteDirectivesComponent implements OnInit {
  title = "Raclette party";

  isThisIngredientVital: boolean = true;

  displayGuestList: boolean = false;

  songList: string[] = ["Au DD", "Ne me quitte pas", "Le temps est bon"];

  constructor() {}

  ngOnInit(): void {}

  getGuestList() {
    this.displayGuestList = !this.displayGuestList;
  }
}
