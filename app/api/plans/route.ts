import { connectToDatabase } from '@/app/lib/mongodb';
import Subscription from '@/app/models/Subscription';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    console.log('Database connection established');

    const subscriptions = await Subscription.find({});
    console.log('Subscriptions fetched:', subscriptions);

    if (!subscriptions || subscriptions.length === 0) {
      console.log('No subscriptions found in the database');
      return NextResponse.json({ message: 'No subscriptions found' }, { status: 404 });
    }

    return NextResponse.json(subscriptions, { status: 200 });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
