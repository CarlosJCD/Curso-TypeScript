import { Router } from "express";
import { getToDoItems, createToDoItem, updateToDoItem, deleteToDoItem } from "../controllers/toDo";

const router = Router();

router.post("/", createToDoItem)

router.get("/", getToDoItems)

router.patch("/:id", updateToDoItem) 

router.delete("/:id", deleteToDoItem) 

export default router;