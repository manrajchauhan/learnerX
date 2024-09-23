import mongoose, { Document, Model } from 'mongoose';

interface ICourse extends Document {
  name: string;
  imageSrc: string;
  currentPrice: string;
  originalPrice: string;
  link: string;
}

const CourseSchema = new mongoose.Schema<ICourse>({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Course: Model<ICourse> = mongoose.models.Courses || mongoose.model<ICourse>('Courses', CourseSchema);
export default Course;
