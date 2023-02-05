import { server } from "./config/server.js";
import { database } from "./config/database.js";
import { todoRouter } from "./config/routes.js";
todoRouter(server);
