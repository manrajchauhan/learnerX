import { connectToDatabase } from '@/app/lib/mongodb';
import Purchase from '@/app/models/Purchase';

export default async function handler(req:any, res:any) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { courseId, courseName, price, userId, email, date } = req.body;

    try {
      const purchase = new Purchase({
        courseId,
        courseName,
        price,
        userId,
        email,
        date,
      });

      await purchase.save();
      res.status(201).json({ message: 'Purchase recorded successfully', purchase });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to record purchase', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
