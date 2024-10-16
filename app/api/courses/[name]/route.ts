import { connectToDatabase } from '@/app/lib/mongodb';
import Course from '@/app/models/Course';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { name: string } }) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Extract the course name from the URL params
    const { name } = params;

    // Find the course by its name (case-insensitive)
    const course = await Course.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });

    // If no course is found, return 404
    if (!course) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }

    // Return the course data if found
    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error('Error fetching course by name:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
