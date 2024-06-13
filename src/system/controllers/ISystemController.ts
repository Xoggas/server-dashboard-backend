import { Request, Response } from "express";

export interface ISystemController {
  getAllStats(req: Request, res: Response): Promise<Response>;
  reboot(req: Request, res: Response): Promise<Response>;
  shutdown(req: Request, res: Response): Promise<Response>;
}