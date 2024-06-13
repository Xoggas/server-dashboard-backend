import { Size } from "./Size";

export class Drive {
  public readonly name: string;
  public readonly totalSpace: Size;
  public readonly freeSpace: Size;
  public readonly usedSpace: Size;

  constructor(name: string, totalSpace: number, freeSpace: number, usedSpace: number) {
    this.name = name;
    this.totalSpace = new Size(totalSpace);
    this.freeSpace = new Size(freeSpace);
    this.usedSpace = new Size(usedSpace);
  }
}