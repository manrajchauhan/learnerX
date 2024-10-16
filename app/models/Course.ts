import mongoose, { Document, Model } from 'mongoose';

interface ICourse extends Document {
  _id: string;
  name: string;
  imageSrc: string;
  currentPrice: string;
  originalPrice: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  whatYouWillLearn: string[];
  topics: string[];
  courseContent: { title: string; videoId: string }[];
  requirements: string[];
  whoThisCourseIsFor: string[];
  thisCourseIncludes: string[];
}

const CourseSchema = new mongoose.Schema<ICourse>({
  name: {
    type: String,
    required: true,
    trim: true,
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
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructor: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
    trim: true,
  },
  whatYouWillLearn: {
    type: [String],
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
  courseContent: {
    type: [
        {
            title: { type: String, required: true },
            videoId: { type: String, required: true },
        },
    ],
    required: true,
},

  requirements: {
    type: [String],
    required: true,
  },
  whoThisCourseIsFor: {
    type: [String],
    required: true,
  },
  thisCourseIncludes: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

const Course: Model<ICourse> = mongoose.models.Courses || mongoose.model<ICourse>('Courses', CourseSchema);
export default Course;
