import express from "express";
import todoController from "../controllers/todos/index"

export const todos = express.Router();

todos.post("/", todoController.create);

todos.get("/", todoController.getAll);

todos.delete("/:id", todoController.delete);