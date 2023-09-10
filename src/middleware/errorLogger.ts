import { NextFunction, Request, Response } from "express";
import logger from "@/logger/index";

export default function errorLogger(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error({
    stack: err.stack,
    message: err.message,
  });

  next();
}
