import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // default XAMPP password is empty
  database: 'smatica_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
