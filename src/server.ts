import express, { ErrorRequestHandler, RequestHandler } from "express";

const app = express();

export function start(port: number, fn: () => void) {
  app.listen(port, fn);
}

export function addMiddleware(fn: RequestHandler | ErrorRequestHandler) {
  app.use(fn);
}

export function setGetRoute(route: string, fn: RequestHandler) {
  app.get(route, fn);
}

export function setPostRoute(route: string, fn: RequestHandler) {
  app.post(route, fn);
}

export function setPutRoute(route: string, fn: RequestHandler) {
  app.put(route, fn);
}

export function setDeleteRoute(route: string, fn: RequestHandler) {
  app.delete(route, fn);
}

export function setPatchRoute(route: string, fn: RequestHandler) {
  app.patch(route, fn);
}
