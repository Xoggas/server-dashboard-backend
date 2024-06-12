import { Request, Response } from "express";

export interface ISystemController {
  getAllStats(req: Request, res: Response): Response;
  reboot(req: Request, res: Response): Response;
}