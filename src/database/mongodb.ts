import mongoose from 'mongoose';
import { MONGODB_URL } from 'config/config';

export class MongoDB {
  static async connect(): Promise<any> {
    return await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  static async disconnect(): Promise<any> {
    await mongoose.disconnect();
  }
}
