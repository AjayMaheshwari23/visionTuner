import mongoose, { Document, Model } from "mongoose";

export interface Project {
  projectId: number;
  title: string;
  description: string;
  categoryNumber: number;
  categories: string[];
  images: string[];
  annotations: string[];
}

interface User {
  username: string;
  email: string;
  password: string;
  projects: Project[];
}

interface UserDocument extends User, Document {}

interface UserModel extends Model<UserDocument> {}

const projectSchema = new mongoose.Schema({
  projectId: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  categoryNumber: { type: Number, required: true },
  categories: { type: [String], required: true },
  images: { type: [String], required: true },
  annotations: { type: [String], required: true },
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

const User = mongoose.models.User || mongoose.model<UserDocument, UserModel>(
  "User",
  userSchema
);

export default User;
