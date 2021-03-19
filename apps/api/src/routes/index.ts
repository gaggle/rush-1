import { Router } from "express";

import { router as healthRouter } from "./health";

export const router = Router();

router.use("/health", healthRouter);