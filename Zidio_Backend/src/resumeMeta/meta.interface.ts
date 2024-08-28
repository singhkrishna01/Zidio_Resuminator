import { Document } from 'mongoose';

interface activeResume {
  _id: string;
  profileName: string;
  webid: string;
  icon: string;
  isPublic: boolean;
  isTemplate: boolean;
  color: string;
}

export interface ResumeMeta extends Document {
  uid: string;
  isBanned: number;
  fullName: string;
  email: string;
  active: [activeResume];
}
