import { Router } from 'express';
import itemRouter from "./item.routes.js";

const router = Router();

router.use("/user", itemRouter);

export default router;
