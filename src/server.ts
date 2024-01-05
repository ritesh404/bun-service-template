import express, { NextFunction, Request, Response, response } from "express";
import {
  ErrorHandlerType,
  RequestHandlerType,
  ResponseHandlerType,
} from "./types/server";

const app = express();

function commonHandler<ResponseBody>(fn: RequestHandlerType<ResponseBody>) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn({
      request: {
        method: req.method,
        url: req.originalUrl,
        body: req.body,
        ip: req.ip,
        headers: req.headers,
      },
      body: req.body,
      params: req.params,
      query: req.query,
    })
      .then((response) => {
        if (response) {
          if (response.headers) {
            Object.entries(response.headers).map(([key, value]) => {
              res.set(key, value);
            });
          }

          if (response.status && response.status >= 400) {
            if (response?.body?.error) next(new Error(response.body.error));
            else next(new Error("Something went wrong"));
            res.status(response.status).json(response.body?.error);
          } else {
            res.status(response?.status || 500).json(response.body?.data || {});
          }
        }
        next();
      })
      .catch((err) => {
        next(err);
        res.status(500).json({ error: "Something went wrong" });
      });
  };
}

export function start(
  config: { port: number; hostname?: string },
  fn: () => void
) {
  app.listen(config, fn);
}

export function addGlobalErrorHandler<ResponseBody>(
  fn: ErrorHandlerType<ResponseBody>
) {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    fn({ error, message: error.message });
  });
}

export function addPreRequestHandler<ResponseBody>(
  fn: RequestHandlerType<ResponseBody>
) {
  app.use(commonHandler(fn));
}

export function addPreResponseHandler<ResponseBody>(
  fn: ResponseHandlerType<ResponseBody>
) {
  app.use(commonHandler(fn));
}

export function setGetRoute<ResponseBody>(
  route: string,
  fn: RequestHandlerType<ResponseBody>
) {
  app.get(route, commonHandler(fn));
}

export function setPostRoute<ResponseBody>(
  route: string,
  fn: RequestHandlerType<ResponseBody>
) {
  app.post(route, commonHandler(fn));
}

export function setPutRoute<ResponseBody>(
  route: string,
  fn: RequestHandlerType<ResponseBody>
) {
  app.put(route, commonHandler(fn));
}

export function setDeleteRoute<ResponseBody>(
  route: string,
  fn: RequestHandlerType<ResponseBody>
) {
  app.delete(route, commonHandler(fn));
}

export function setPatchRoute<ResponseBody>(
  route: string,
  fn: RequestHandlerType<ResponseBody>
) {
  app.patch(route, commonHandler(fn));
}

export function rawServer() {
  return app;
}
