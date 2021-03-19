import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";
import { getRandomInt } from "../shared/functions";

export const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get("/", async (req: Request, res: Response) => {
  return res.status(OK).json({ ping: "pong", random: getRandomInt() });
});
