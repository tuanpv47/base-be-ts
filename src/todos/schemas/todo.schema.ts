import { Schema, model } from 'mongoose';
import { SCHEMA_NAME } from 'constant/constant';

const todoSchema = new Schema({
  name: String,
  age: Number,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: SCHEMA_NAME.USERS },
  updatedBy: { type: Schema.Types.ObjectId, ref: SCHEMA_NAME.USERS }
});

export default model(SCHEMA_NAME.TODOS, todoSchema);
