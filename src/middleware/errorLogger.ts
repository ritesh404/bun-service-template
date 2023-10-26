import logger from "../logger";
import { ErrorContextType } from "@/types/server";

export default async function errorLogger(ctx: ErrorContextType) {
  logger.error({
    stack: ctx.error?.stack,
    message: ctx.error?.message,
  });
}
