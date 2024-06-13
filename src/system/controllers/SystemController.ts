import { Request, Response } from "express";
import { ISystemService } from "../services/ISystemService";
import { ISystemController } from "./ISystemController";
import { System } from "../models/System";

export class SystemController implements ISystemController {
  private readonly systemService: ISystemService;

  constructor(systemService: ISystemService) {
    this.systemService = systemService;
  }

  getAllStats = async (req: Request, res: Response): Promise<Response> => {
    const system: System = await this.systemService.getAllStats();
    return res.json(system);
  }

  reboot = async (req: Request, res: Response): Promise<Response> => {
    await this.systemService.reboot();
    return res.send();
  }

  shutdown = async (req: Request, res: Response): Promise<Response> => {
    await this.systemService.shutdown();
    return res.send();
  }
}