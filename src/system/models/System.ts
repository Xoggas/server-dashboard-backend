import { Cpu } from "./Cpu";
import { Drive } from "./Drive";
import { Ram } from "./Ram";

export class System {
  public readonly cpu: Cpu;
  public readonly ram: Ram;
  public readonly drives: Drive[];

  constructor(cpu: Cpu, ram: Ram, drives: Drive[]) {
    this.cpu = cpu;
    this.ram = ram;
    this.drives = drives;
  }
}