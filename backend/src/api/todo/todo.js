import restful from "node-restful";
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
});

const todoModel = restful.model("Todo", todoSchema);
export { todoModel };
