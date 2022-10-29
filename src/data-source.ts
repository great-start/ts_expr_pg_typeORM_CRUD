import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { config } from './config';
import { Users, Posts } from './entity';

export const appDataSource = new DataSource({
    type: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE,
    synchronize: false,
    logging: false,
    entities: [Users, Posts],
    // subscribers: [],
    migrations: ['src/migration/*.{js,ts}'],
});
