import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  model: Coucou = new Coucou();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}

export class Coucou {
  user: string;
  email: string;
}
