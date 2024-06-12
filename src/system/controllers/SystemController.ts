import { Request, Response } from "express";
import { ISystemService } from "../services/ISystemService";
import { ISystemController } from "./ISystemController";
import { System } from "../models/System";

export class SystemController implements ISystemController {
  private systemService: ISystemService;

  constructor(systemService: ISystemService) {
    this.systemService = systemService;
  }

  getAllStats(req: Request, res: Response): Response {
    const system: System = this.systemService.getAllStats();
    return res.json(system);
  }

  reboot(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}