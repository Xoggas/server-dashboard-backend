export class Disk {
  public readonly totalSpace: Number;
  public readonly freeSpace: Number;
  public readonly usedSpace: Number;

  constructor(totalSpace: Number, freeSpace: Number, usedSpace: Number) {
    this.totalSpace = totalSpace;
    this.freeSpace = freeSpace;
    this.usedSpace = usedSpace;
  }
}