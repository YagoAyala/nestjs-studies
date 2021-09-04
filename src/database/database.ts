import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

const port = +DB_PORT | 3306;

export const dataBaseSettings = {
  type: 'mysql',
  host: DB_HOST,
  port: port,
  username: DB_DATABASE,
  password: DB_USER,
  database: DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: true,
};

// TODO: quando estiver em produção precisa desativar o synchronize
// synchronize: ele certifica-se que nosso TypeOrm entities vão ser igual ao do banco

export default dataBaseSettings;
