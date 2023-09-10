import { NextFunction, Request, Response } from "express";
import logger from "../loggers";

export default function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    params: req.params,
    query: req.query,
    body: req.body,
    ip: req.ip,
  });

  next();
}
