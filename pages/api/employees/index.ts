import { NextApiRequest, NextApiResponse } from 'next';
import getDbConnection from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const pool = getDbConnection(); 
      const [employees] = await pool.promise().query('SELECT * FROM employees');
      res.status(200).json(employees);
    } catch (error) {
      console.error('Database Error:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
