import mysql from 'mysql2';
let pool: mysql.Pool | null = null;

const getDbConnection = (): mysql.Pool => {
  if (!pool) {
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL,
    });
  }
  
  return pool;
};

export default getDbConnection;
