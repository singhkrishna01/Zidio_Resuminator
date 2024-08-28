import express from 'express';
import mongoose from 'mongoose';
import PostHog from 'posthog-node';
import serverless from 'serverless-http';
import broadmap from './broadmap/broadmap.routes';
import unless from './common/unless';
import { MongoConfig } from './config/mongodb.config';
import { PostHogConfig } from './config/posthog.config';
import { decodeIDToken } from './middleware/authenticate.middleware';
import resume from './resume/resume.routes';
import resumeMeta from './resumeMeta/meta.routes';
import userSettings from './userSettings/settings.routes';
import utils from './utils/utils.routes';

const app = express();
const cors = require('cors');


mongoose.connect(
  MongoConfig.uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(err.message);
      console.log(err);
    } else {
      console.log('[INFO] MongoDB Connected');
    }
  },
);

export const client = new PostHog(PostHogConfig.apiKey, {
  host: PostHogConfig.host,
});
app.use(cors({
  credentials:true,
  origin: 'https://localhost:3000/',
  methods: ['GET','POST'],
}));
app.use(express.json());
app.use(unless(decodeIDToken, '/v0.2.0', '/broadmap/subscribe'));
app.use('/v0.2.0', utils);
app.use('/broadmap', broadmap);
app.use('/v0.2.0/resume', resume);
app.use('/v0.2.0/meta', resumeMeta);
app.use('/v0.2.0/settings', userSettings);
console.log (PostHogConfig.host);
module.exports.handler = serverless(app);
app.listen(process.env.PORT,()=>{console.log(process.env.PORT)});