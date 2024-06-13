export class Cpu {
  public readonly load: number;
  public readonly temperature: number;

  constructor(load: number, temperature: number) {
    this.load = load;
    this.temperature = temperature;
  }
}