import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTables1666091447646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'channels',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'uuid',
            length: '255',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'thumbnail',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'isActive',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'tracks',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'uuid',
            length: '255',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'src',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'isActive',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('channel');
    await queryRunner.dropTable('scholars');
    await queryRunner.dropTable('tracks');
  }
}
