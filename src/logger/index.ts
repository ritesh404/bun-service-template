import pino from "pino";

const logger = pino({
  level: "info", // Adjust log level as needed,
  timestamp: () => `, "timestamp": "${new Date().toISOString()}"`,
  formatters: { level: (label) => ({ level: label }) },
  serializers: {
    req: (req) => ({
      url: req.url,
      body: req.body,
      ip: req.ip,
      method: req.method,
      query: req.query,
    }),
  },
});

export default logger;
