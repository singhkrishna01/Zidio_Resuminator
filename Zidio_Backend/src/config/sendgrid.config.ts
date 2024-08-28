import * as dotenv from 'dotenv';
dotenv.config();

const SGConfig = {
  api: process.env.SG_API || 'demokey',
  new: process.env.SG_NEW_ACC || '',
  del: process.env.SG_DEL_ACC || '',
  email: process.env.SG_EMAIL || 'no-reply@resuminator.in',
};

export { SGConfig };
