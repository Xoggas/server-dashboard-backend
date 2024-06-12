import { Cpu } from "./Cpu";
import { Disk } from "./Disk";
import { Ram } from "./Ram";

export class System {
  public readonly cpu: Cpu;
  public readonly ram: Ram;
  public readonly disks: Disk[];

  constructor(cpu: Cpu, ram: Ram, disks: Disk[]) {
    this.cpu = cpu;
    this.ram = ram;
    this.disks = disks;
  }
}