import mongoose, { Document, Model } from 'mongoose';

interface IPlan extends Document {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  createdAt: Date;
}

const PlanSchema = new mongoose.Schema<IPlan>({
  name: {
    type: String,
    required: true,
  },
  priceMonthly: {
    type: Number,
    required: true,
  },
  priceYearly: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Plan: Model<IPlan> = mongoose.models.Subscriptions || mongoose.model<IPlan>('Subscriptions', PlanSchema);
export default Plan;
