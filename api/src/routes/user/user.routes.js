import { Router } from "express";
import { getItems, createItem, getItemById, getCategories, updateItem } from "./user.controller.js";

const router = Router();

//    /user/items
router.get("/items", getItems); // acá podría llegar /user/items?category=vodka por ejemplo
router.get("/items/categories", getCategories);
router.put("/items/update/:id", updateItem);
router.post("/items", createItem);
router.get("/items/:id", getItemById);

export default router;