import { connectToDatabase } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  try {
    // Connect to the database
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Create a new user
    const user = new User({ email, password });
    await user.save();

    // Respond with success
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error signing up:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
