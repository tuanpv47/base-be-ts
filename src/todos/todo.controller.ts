import express, { Request, Response } from 'express';
import { RouteWrapperHOC } from 'utils/error.middle';
import { TodoService } from './todo.service';

class TodoController {
  public router = express.Router();
  public path = {
    findAll: '/todo',
    findById: '/todo/:id',
    create: '/todo',
    update: '/todo/:id',
    delete: '/todo/:id'
  };
  private todoService: TodoService = new TodoService();
  constructor() {
    this.initRoutes();
  }
  public initRoutes() {
    this.router.get(this.path.findAll, RouteWrapperHOC(this.findAll));
    this.router.get(this.path.findById, RouteWrapperHOC(this.findById));
    this.router.post(this.path.create, RouteWrapperHOC(this.create));
    this.router.put(this.path.update, RouteWrapperHOC(this.update));
    this.router.delete(this.path.delete, RouteWrapperHOC(this.delete));
  }
  protected findAll = async (req: Request, res: Response) => {
    const { query } = req;
    const { status, data } = await this.todoService.findAll(query);
    return res.status(status).json(data);
  };
  protected findById = async (req: Request, res: Response) => {
    const {
      params: { id }
    } = req;
    const { status, data } = await this.todoService.findById(id);
    return res.status(status).json(data);
  };
  protected create = async (req: Request, res: Response) => {
    const { body } = req;
    const { status, data } = await this.todoService.create(body);
    return res.status(status).json(data);
  };
  protected update = async (req: Request, res: Response) => {
    const {
      body,
      params: { id }
    } = req;
    const { status, data } = await this.todoService.update(id, body);
    return res.status(status).json(data);
  };
  protected delete = async (req: Request, res: Response) => {
    const {
      params: { id }
    } = req;
    const { status, data } = await this.todoService.delete(id, '');
    return res.status(status).json(data);
  };
}

export default TodoController;
