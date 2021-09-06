import 'dotenv/config';

export const databaseSettings = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) | 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export default databaseSettings;
