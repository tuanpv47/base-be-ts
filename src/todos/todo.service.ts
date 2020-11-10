import { ITodoService } from './interfaces/todo.interface';
import todoModel from 'todos/schemas/todo.schema';
import { MongoDB } from 'database/mongodb';
import { HttpCode } from 'constant/constant';

export class TodoService implements ITodoService {
  constructor() {}
  async findAll(filter: any): Promise<any> {
    const conn = await MongoDB.connect();
    const data = await todoModel.find({}).lean();
    await conn.disconnect();
    return { status: HttpCode.OK, data };
  }
  async findById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async create(todo: any): Promise<any> {
    const conn = await MongoDB.connect();
    const newTodo = new todoModel(todo);
    await newTodo.save();
    await conn.disconnect();
    return { status: HttpCode.CREATED, data: { message: 'Created successfully' } };
  }
  async update(id: string, todo: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string, updatedBy: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
