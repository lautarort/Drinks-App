import { Router } from "express";
import ticketRouter from './ticket.routes.js';

const router = Router();

router.get('/ticket', ticketRouter);

export default router;