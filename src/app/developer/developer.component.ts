import { Component, Input, OnInit } from "@angular/core";
import { Developer } from "../models/Developer";
import { Skill } from "../models/Skill";

@Component({
  selector: "app-developer",
  templateUrl: "./developer.component.html",
  styleUrls: ["./developer.component.scss"]
})
export class DeveloperComponent implements OnInit {
  public developer: Developer;

  constructor() {}

  ngOnInit() {
    this.developer = new Developer("Ademo", "Y'a pas", 34, "Homme", "Un boy", [
      new Skill(
        "Au DD",
        "https://intrld.com/wp-content/uploads/2019/05/ademo-pnl-au-dd-sample.jpg",
        "Bien"
      ),
      new Skill(
        "Béné",
        "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Ff6120da1f7d3df6808bf0f73ce3fe25b.600x600x1.jpg",
        "Très bien"
      ),
      new Skill(
        "A l'ammoniaque",
        "https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/89d4bcc2-a90a-4f77-adc7-5978707b474b/801x410_pnl_a_lammoniaque.jpg",
        "Ouf"
      ),
      new Skill(
        "Je t'haine",
        "https://a.wattpad.com/cover/134321253-352-k147860.jpg",
        "Oufissime"
      )
    ]);
  }
}
