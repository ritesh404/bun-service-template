import logger from "../logger";
import { RequestContextType } from "@/types/server";

export default async function requestLogger(ctx: RequestContextType) {
  const req = ctx.request;
  logger.info({
    method: req.method,
    url: req.url,
    params: ctx.params,
    query: ctx.query,
    body: req.body,
    ip: req.ip,
  });
}
