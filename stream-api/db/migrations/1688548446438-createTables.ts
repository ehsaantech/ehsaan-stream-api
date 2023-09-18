import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createTables1688548446438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
              name: 'channel',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isNullable: false,
                  isGenerated: true,
                  generationStrategy:'increment'                  
                },
                {
                  name: 'englishName',
                  type: 'varchar',
                  isNullable: false,
                  length: '255',
                },
                {
                  name: 'arabicName',
                  type: 'varchar',
                  isNullable: true,
                  length: '255',
                },
                {
                  name: 'routeKey',
                  type: 'varchar',
                  isNullable: false,
                  length: '255',
                },
                {
                  name: 'thumbnailKey',
                  type: 'varchar',
                  isNullable: false,
                  length: '255',
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: false,
                  length: '2255',
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
                  type: 'int',
                  isPrimary: true,
                  isNullable: false,
                  isGenerated: true,  
                  generationStrategy:'increment'  
                },
                {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
                  length: '500',
                },
                {
                  name: 'srcKey',
                  type: 'varchar',
                  isNullable: false,
                  length: '500',
                },
                {
                  name: 'isActive',
                  type: 'boolean',
                  isNullable: false,
                  default: true
                },
                {
                  name: 'channelId',
                  type: 'int',
                  isNullable: false,
               
                },      
              ],
            }),
            true,
          );

          await queryRunner.createTable(
            new Table({
              name: 'user',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isNullable: false,
                  isGenerated: true,  
                  generationStrategy:'increment'  
                },
                {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
                  length: '255',
                },
                {
                  name: 'password',
                  type: 'varchar',
                  isNullable: false,
                  length: '255',
                },     
              ],
            }),
            true,
          );

          await queryRunner.createForeignKey(
            'tracks',
            new TableForeignKey({
              columnNames: ['channelId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'channel',
              onDelete: 'CASCADE',
              onUpdate: 'NO ACTION',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tracks');
        await queryRunner.dropTable('channel');
        await queryRunner.dropTable('user');   
    }

}
