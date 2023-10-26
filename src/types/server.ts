export type RequestType = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTION" | string;
  url?: string;
  body?: any;
  ip?: string;
  headers?: HeadersType;
};

export type HeadersType = { [key: string]: string | string[] | undefined };

export type RequestContextType<Req = RequestType> = {
  params?: any;
  query?: any;
  request: Req;
  body?: any;
};

export type ResponseContextType<RequestType = Request> = {
  params?: any;
  query?: any;
  request: RequestType;
  body?: any;
};

export type ResponseType<ResponseBody> = {
  body?: ResponseBody;
  headers?: HeadersType;
  status?: number;
};

export type ErrorContextType = {
  error?: Error;
  message?: String;
  code?: any;
};

export type RequestHandlerType<ResponseBody, Req = RequestType> = (
  ctx: RequestContextType<Req>
) => Promise<ResponseType<ResponseBody> | void>;

export type ResponseHandlerType<ResponseBody, Req = RequestType> = (
  ctx: RequestContextType<Req>
) => Promise<ResponseType<ResponseBody> | void>;

export type ErrorHandlerType<ResponseBody> = (
  ctx: ErrorContextType
) => Promise<ResponseType<ResponseBody> | void>;
