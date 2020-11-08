import dotenv from 'dotenv';
dotenv.config();

const PORT: number | string = process.env.PORT || 5000;
const MONGODB_URL: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';

export { PORT, MONGODB_URL };
