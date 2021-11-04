import { Router } from "express";
import { postUser, getUser, getUserById, getUserByNP } from "./user.controller.js";

const router = Router();

router.get('/user', getUser);
router.post('/user/create', postUser);
// router.get('/user/:id', getUserById);
router.get('/user/login', getUserByNP);

export default router;