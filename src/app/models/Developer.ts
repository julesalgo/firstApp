import { Skill } from "./Skill";

export class Developer {
  constructor(
    public lastName: string,
    public firtsName: string,
    public age: string,
    public sexe: string,
    public bio: string,
    public skills: Array<Skill>
  ) {}
}
