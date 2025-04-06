import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const runSQLScript = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    multipleStatements: true
  });

  try {
    const sql = fs.readFileSync('./scripts/table_creation.sql', 'utf8');
    await connection.query(sql);
    console.log('✅ Tables created successfully');
  } catch (err) {
    console.error('❌ Error creating tables:', err);
  } finally {
    await connection.end();
  }
};

runSQLScript();
