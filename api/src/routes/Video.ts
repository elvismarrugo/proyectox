import { Schema, model } from "mongoose";

const videoSchema = new Schema (
  {
    desde: {
      type: String,
      required: true,
      unique: true,
    },
    hasta: {
      type: String,
      required: true,
      unique: true,
    },
    tea: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Video', videoSchema)