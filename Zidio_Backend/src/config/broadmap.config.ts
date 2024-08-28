import * as dotenv from 'dotenv';
dotenv.config();

const BroadmapConfig = {
  api: process.env.BROADMAP || 'development',
};

export { BroadmapConfig };
