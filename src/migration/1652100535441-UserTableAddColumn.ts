import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTableAddColumn1652100535441 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "user" ADD COLUMN "status" INTEGER',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "user" DROP COLUMN "status"',
        );
    }
}
