import express from "express";
import { cors } from "./cors.js";
const port = 3003;
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors);
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`);
});

export { server };
