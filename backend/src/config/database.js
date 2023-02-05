import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
const database = await mongoose.connect("mongodb://localhost/todo");
export { database };
