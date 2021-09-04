import 'dotenv/config';

export const databaseSettings = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) | 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// TODO: quando estiver em produção precisa desativar o synchronize
// synchronize: ele certifica-se que nosso TypeOrm entities vão ser igual ao do banco

export default databaseSettings;
