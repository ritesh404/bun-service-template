import express from "express";
import {
  addGlobalErrorHandler,
  addPreRequestHandler,
  rawServer,
  start,
} from "./src/server";
import setupRouting from "./src/routing";
import requestLogger from "@/middleware/requestLogger";
import errorLogger from "@/middleware/errorLogger";
import logger from "./src/logger";

function startup() {
  rawServer().use(express.json());
  rawServer().use(express.urlencoded());
  addPreRequestHandler(requestLogger);

  setupRouting();
  addGlobalErrorHandler(errorLogger);

  if (!process.env.PORT) throw Error("PORT is missing");
  else
    start({ port: Number(process.env.PORT) }, () => {
      logger.info(`Starting server at ${process.env.PORT}`);
    });
}

startup();
