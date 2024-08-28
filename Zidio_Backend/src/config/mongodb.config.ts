import * as dotenv from 'dotenv';
dotenv.config();

const MongoConfig = {
  uri: process.env.DB_URI || '',
};

export { MongoConfig };
