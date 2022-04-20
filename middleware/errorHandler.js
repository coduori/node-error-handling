import { config } from "dotenv";
config();
const ErrorHandler = (err, req, res, next) => {
  const env = process.env.NODE_ENV;
  const status = res.statusCode ? res.statusCode : 500;
  const payload = {
    message: "The server could not serve your request.",
  };
  if (env === "development") {
    payload.stack = err.stack;
  }
  payload.message = err.message;
  res.status(status).json(payload);
};
export default ErrorHandler;
