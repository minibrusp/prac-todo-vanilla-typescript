import { HasFormat } from "../Interface/HasFormat";

export class Todo implements HasFormat {
  constructor(private todo: string){}

  format() {
    return `${this.todo}`
  }
}