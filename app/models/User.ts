import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the interface for the User document
interface IUser extends Document {
  email: string;
  password: string;
  courseIds: string[]; // Array to store enrolled course IDs
  subscriptionPlanIds: string[]; // Array to store subscription plan IDs
  comparePassword: (password: string) => Promise<boolean>;
}

// Define the schema for the User
const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courseIds: [{ type: Schema.Types.ObjectId, ref: 'Course' }], // Add array for enrolled course IDs
  subscriptionPlanIds: [{ type: Schema.Types.ObjectId, ref: 'SubscriptionPlan' }], // Add array for subscription plan IDs
});

// Hash the password before saving
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare hashed password
UserSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
