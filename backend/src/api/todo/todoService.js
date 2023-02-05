import { todoModel } from "./todo.js";
todoModel.methods(["get", "post", "put", "delete"]);
todoModel.updateOptions({ new: true, runValidators: true });

export { todoModel as todoService };
