import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

if (!conn) {
  console.error('Failed to connect to MySQL database.');
} else {
  console.log('Connected to MySQL database.');
}
