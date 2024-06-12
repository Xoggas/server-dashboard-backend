import { System } from "../models/System";
import { ISystemService } from "./ISystemService";

export class SystemService implements ISystemService {
  getAllStats(): System {
    throw new Error("Method not implemented.");
  }

  reboot(): void {
    throw new Error("Method not implemented.");
  }
}