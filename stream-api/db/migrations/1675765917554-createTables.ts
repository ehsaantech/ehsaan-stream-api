import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createTables1675765917554 implements MigrationInterface {

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
                  name: 'src',
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

          await queryRunner.createForeignKey(
            'tracks',
            new TableForeignKey({
              columnNames: ['channelId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'channel',
              onDelete: 'NO ACTION',
              onUpdate: 'NO ACTION',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('channel');
        await queryRunner.dropTable('tracks');

    }

}
