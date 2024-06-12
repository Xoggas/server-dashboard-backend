export class Cpu {
  public readonly cores: Number;
  public readonly load: Number;

  constructor(cores: Number, load: Number) {
    this.cores = cores;
    this.load = load;
  }
}