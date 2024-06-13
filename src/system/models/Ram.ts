import { Size } from "./Size";

export class Ram {
  public readonly total: Size;
  public readonly used: Size;
  public readonly free: Size;

  constructor(total: number, used: number, free: number) {
    this.total = new Size(total);
    this.used = new Size(used);
    this.free = new Size(free);
  }
}