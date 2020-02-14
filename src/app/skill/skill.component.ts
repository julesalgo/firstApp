import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../models/Skill";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"]
})
export class SkillComponent implements OnInit {
  @Input() public skill: Skill;

  constructor() {}

  ngOnInit() {}
}
