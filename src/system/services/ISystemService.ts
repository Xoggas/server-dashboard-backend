import { System } from "../models/System";

export interface ISystemService {
  getAllStats(): Promise<System>;
  reboot(): Promise<void>;
  shutdown(): Promise<void>;
}