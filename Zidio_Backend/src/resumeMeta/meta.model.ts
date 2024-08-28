import { Schema } from 'mongoose';

const activeResume = {
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  profileName: {
    type: String,
    trim: true,
  },
  webid: {
    type: String,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
  },
  isPublic: {
    type: Boolean,
    requied: true,
  },
  isTemplate: {
    type: Boolean,
    requied: true,
  },
  color: {
    type: String,
    trim: true,
  },
};

export const ResumeMetaSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    isBanned: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    active: {
      type: [activeResume],
      required: true,
      default: [],
    },
  },
  { timestamps: true },
);
