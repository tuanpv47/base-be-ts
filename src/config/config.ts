import { DEVELOPMENT } from 'constant/constant';
import dotenv from 'dotenv';
dotenv.config();

const PORT: number | string = process.env.PORT || 5000;
const MONGODB_URL: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';
const NODE_ENV: string = process.env.NODE_ENV || DEVELOPMENT;

export { PORT, MONGODB_URL, NODE_ENV };
