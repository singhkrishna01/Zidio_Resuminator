import * as dotenv from 'dotenv';
dotenv.config();

const PostHogConfig = {
  apiKey: process.env.POSTHOG_API_KEY || 'Dummy_Key',
  host: process.env.POSTHOG_HOST || 'https://app.posthog.com',
};

export { PostHogConfig };
