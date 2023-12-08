import mongoose, { Document } from "mongoose";

interface IBaseTodo {
  title: string;
  userId: string;
  isDone: boolean;
}

interface ITodoSchema extends IBaseTodo, Document {}

const todoSchema = new mongoose.Schema<ITodoSchema>(
  {
    title: { type: String, required: true },
    userId: { type: String, required: true },
    isDone: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const todoModel = mongoose.model<ITodoSchema>("todo", todoSchema);

export default todoModel;
