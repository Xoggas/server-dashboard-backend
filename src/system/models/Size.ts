export class Size {
  public readonly bytes: number;
  public readonly kilobytes: number;
  public readonly megabytes: number;
  public readonly gigabytes: number;
  public readonly terabytes: number;

  /// TODO: implement alignment to multiples of 2
  constructor(bytes: number) {
    this.bytes = bytes;
    this.kilobytes = Math.round(this.bytes / 1024);
    this.megabytes = Math.round(this.kilobytes / 1024);
    this.gigabytes = Math.round(this.megabytes / 1024);
    this.terabytes = Math.round(this.gigabytes / 1024);
  }
}