// models/User.ts
import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String }, // only for credentials provider
  image: { type: String },
});

const User = models.User || mongoose.model("User", UserSchema);
export default User;
