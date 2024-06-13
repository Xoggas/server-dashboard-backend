import { Cpu } from "../models/Cpu";
import { Ram } from "../models/Ram";
import { System } from "../models/System";
import { Drive } from "../models/Drive";
import { ISystemService } from "./ISystemService";
import SystemInformation from "systeminformation";

export class SystemService implements ISystemService {
  getAllStats = async (): Promise<System> => {
    const cpu = await this.getCpu();
    const ram = await this.getRam();
    const drives = await this.getDrives();
    return new System(cpu, ram, drives);
  }

  reboot = async (): Promise<void> => {
    return;
  }

  shutdown = async (): Promise<void> => {
    return;
  }

  private getCpu = async (): Promise<Cpu> => {
    const load = (await SystemInformation.currentLoad()).currentLoad;
    const temperature = (await SystemInformation.cpuTemperature()).main;
    return new Cpu(load, temperature);
  }

  private getRam = async (): Promise<Ram> => {
    const { total, used, free } = await SystemInformation.mem();
    return new Ram(total, used, free);
  }

  private getDrives = async (): Promise<Drive[]> => {
    const driveInfos = await SystemInformation.fsSize();
    const drives = driveInfos.map(x => new Drive(x.fs, x.size, x.available, x.used));
    return drives;
  }
}