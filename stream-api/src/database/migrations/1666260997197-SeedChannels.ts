import { Channel } from 'src/entities/channel.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedChannels1666260997197 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const channels = [
      {
        name: 'Mufti Tariq Masood',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MuftiTM.a054405422c490efe350.jpg',
        description: 'test',
      },
      {
        name: 'Moulana Tariq Jameel',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MTJ.864095e1efe8acf0cf7d.png',
        description: 'test',
      },
      {
        name: 'Mufti Menk',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/muftimenk.8397eebddd2a447344a5.jpg',
        description: 'test',
      },
      {
        name: 'Moulana Ibadullah',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MIBD.e377109ae87d76be2991.jpg',
        description: 'test',
      },
      {
        name: 'Junaid Jamshed',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/DR.4306c10bd0b46c540586.png',
        description: 'test',
      },
      {
        name: 'DR. Israr Ahmed',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/DR.4306c10bd0b46c540586.png',
        description: 'test',
      },
      {
        name: 'Zakir Naik',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/ZN.a623f8954e10194df55b.png',
        description: 'test',
      },
    ];
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Channel)
      .values(channels)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM channels`);
  }
}
