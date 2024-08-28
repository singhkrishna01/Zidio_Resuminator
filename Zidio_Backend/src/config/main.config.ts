import * as dotenv from 'dotenv';
dotenv.config();

const MainConfig = {
  env: process.env.NODE_ENV || 'development',
};

export { MainConfig };
