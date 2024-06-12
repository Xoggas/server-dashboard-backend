export class Ram {
  public readonly total: Number;
  public readonly used: Number;
  public readonly free: Number;

  constructor(total: Number, used: Number, free: Number) {
    this.total = total;
    this.used = used;
    this.free = free;
  }
}