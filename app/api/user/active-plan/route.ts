import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import jwt from 'jsonwebtoken';

interface ActivePlanResponse {
  activePlan: string | null;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ActivePlanResponse | ErrorResponse>) {
  if (req.method === 'GET') {
    try {
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader) {
        return res.status(401).json({ error: 'Authorization token missing' });
      }

      const token = authorizationHeader.split(' ')[1];
      let user;

      try {
        const secret = process.env.JWT_SECRET || 'default_secret';
        user = jwt.verify(token, secret) as { id: string };
      } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      await connectToDatabase();

      const userDoc = await User.findById(user.id).select('activePlan');

      if (!userDoc) {
        return res.status(404).json({ error: 'User not found' });
      }

      const activePlan = userDoc.activePlan || null;
      res.status(200).json({ activePlan });
    } catch (error) {
      console.error('Error loading active plan:', error);
      const message = error instanceof Error ? error.message : 'Failed to load active plan';
      res.status(500).json({ error: message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
