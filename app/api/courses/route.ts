import { connectToDatabase } from '@/app/lib/mongodb';
import Course from '@/app/models/Course';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();

    const courses = await Course.find({});
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
