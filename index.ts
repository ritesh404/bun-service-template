import express from "express";
import { addMiddleware, start } from "./src/server";
import requestLogger from "./src/middlewares/requestLogger";
import logger from "./src/loggers";
import errorLogger from "./src/middlewares/errorLogger";
import setupRouting from "./src/routing";

function startup() {
  addMiddleware(express.json());
  addMiddleware(express.urlencoded());
  addMiddleware(requestLogger);
  addMiddleware(errorLogger);

  setupRouting();

  if (!process.env.PORT) throw Error("PORT is missing");
  else
    start(Number(process.env.PORT), () => {
      logger.info(`Starting server at ${process.env.PORT}`);
    });
}

startup();
