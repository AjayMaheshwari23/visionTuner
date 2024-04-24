import mongoose, { Document, Model } from "mongoose";

import { ImageObj } from "@/components/upload/UploadImage";

export interface Project {
  projectId: number;
  title: string;
  description: string;
  categoryNumber: number;
  categories: string[];
  images: ImageObj[];
  annotations: ImageObj[];
  model:string;
  createdAt: Date; 
}

interface User {
  username: string;
  email: string;
  password: string;
  projects: Project[];
}

interface UserDocument extends User, Document {}

interface UserModel extends Model<UserDocument> {}

const imageObjSchema = new mongoose.Schema<ImageObj>({
  id: { type: Number, required: true },
  url: { type: String, required: true },
});

const projectSchema = new mongoose.Schema<Project>({
  projectId: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  categoryNumber: { type: Number, required: true },
  categories: { type: [String], required: true },
  images: { type: [imageObjSchema], required: true },
  annotations: { type: [imageObjSchema], required: true },
  model : { type:String , required:false },
  createdAt : { type:Date , default:Date.now  }
});

const userSchema = new mongoose.Schema<UserDocument, UserModel>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  projects: {
    type: [projectSchema],
    default: [],
  },
});

userSchema.pre("save", function (next) {
  if (!this.projects) {
    this.projects = [];
  }
  next();
});

const User =
  mongoose.models.User ||
  mongoose.model<UserDocument, UserModel>("User", userSchema);

export default User;
