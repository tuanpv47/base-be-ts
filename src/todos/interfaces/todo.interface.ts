export interface ITodo {
  readonly name: string;
  readonly age: number;
  readonly isDelete?: boolean;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly createdBy?: string;
  readonly updatedBy?: string;
}
export interface ITodoService {
  findAll(filter: any): Promise<any>;
  findById(id: string): Promise<any>;
  create(todo: any): Promise<any>;
  update(id: string, todo: any): Promise<any>;
  delete(id: string, updatedBy: string): Promise<any>;
}
