import { Router } from "express";
import { createATodo, deleteTodo, getATodo, getAllTodo, updateTodo } from "../controller/crud.controller";
export const defaultRoute = Router();
defaultRoute.get("/", getAllTodo);
defaultRoute.get("/:id", getATodo);
defaultRoute.post("/", createATodo);
defaultRoute.delete("/:id" , deleteTodo)
defaultRoute.put("/:id" , updateTodo)