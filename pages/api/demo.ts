/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validate the input
    if (!name || !email || !company || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert into database
    const [result] = await pool.execute(
      'INSERT INTO demo_requests (name, email, company, message) VALUES (?, ?, ?, ?)',
      [name, email, company, message]
    );

    return res.status(200).json({ message: 'Demo request submitted successfully' });
  } catch (error) {
    console.error('Error saving demo request:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
