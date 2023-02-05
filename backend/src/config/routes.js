import express from "express";
import { todoService } from "../api/todo/todoService.js";

export function todoRouter(server) {
    //API Routes
    const router = express.Router();
    server.use("/api", router);
    todoService.register(router, "/todos");
}
