import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1652099247451 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(50) NOT NULL,
                    age INT NOT NULL
);`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP TABLE IF EXISTS "user"',
        );
    }
}
