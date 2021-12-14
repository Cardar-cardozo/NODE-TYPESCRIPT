import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface CategoryInput {
  user: UserDocument["_id"];
  categoryName: string;
  image: string;
}

export interface CategoryDocument extends CategoryInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      unique: true,
      default: () => `category${nanoid()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    categoryName: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model<CategoryDocument>("Category", categorySchema);

export default CategoryModel;