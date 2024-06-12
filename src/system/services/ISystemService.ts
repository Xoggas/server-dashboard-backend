import { System } from "../models/System";

export interface ISystemService {
  getAllStats(): System;
  reboot(): void;
}