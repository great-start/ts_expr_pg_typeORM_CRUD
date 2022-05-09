import { DataSource } from 'typeorm';
import { config } from './config';

export const appDataSource = new DataSource({
    type: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ['migration/**/*.ts'],
});
