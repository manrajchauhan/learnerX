import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
});

const Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);

export default Purchase;
