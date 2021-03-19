import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import StatusCodes from "http-status-codes";

import { router as baseRouter } from "./routes";

const { BAD_REQUEST } = StatusCodes;
export const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Add APIs
app.use("/api", baseRouter);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});
