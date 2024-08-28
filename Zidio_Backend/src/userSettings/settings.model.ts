import { Schema } from 'mongoose';

export const RequestAccountData = new Schema(
  {
    requestedOn: {
      type: Date,
      trim: true,
      default: null,
    },
    completedBy: {
      type: Date,
      trim: true,
      default: null,
    },
    uid: {
      type: String,
      requied: true,
      trim: true,
      unique: true,
    },
    isCompleted: {
      type: Boolean,
      trim: true,
      default: null,
    },
    completedOn: {
      type: Date,
      trim: true,
      default: null,
    },
  },
  { timestamps: true },
);
