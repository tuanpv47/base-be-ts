import { MongoDB } from './mongodb';

export interface IDatabase {
  connect(): Promise<any>;
  disconnect(): Promise<any>;
}
const DatabaseType = [
  { dbName: 'MYSQL', build: () => {} },
  { dbName: 'SQL_SERVER', build: () => {} },
  { dbName: 'ORACLE', build: () => {} },
  { dbName: 'MONGODB', build: () => new MongoDB() }
];
export class Database {
  static async connect() {}
  static async disconnect() {}
}
