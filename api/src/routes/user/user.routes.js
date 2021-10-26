import { Router } from "express";
import { getItems, createItem, getItemById } from "./user.controller.js";

const router = Router();

//    /admin/items
router.get("/items", getItems);
router.post("/items", createItem);
router.get("/items/:id", getItemById);

// router.get("/item/:id", getItemById);
// router.put("/items", updateItem);

export default router;