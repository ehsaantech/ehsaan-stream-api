
import { Channel } from 'src/entities/channel.entity';
import { Track } from 'src/entities/track.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

/**import { MigrationInterface, QueryRunner } from 'typeorm';
import * as enums from '../../src/enums';
import { Role, UserRole } from '../../src/components/roles/entity';
import { User } from '../../src/components/users/entity';

export class SeedUserRoleTable1594292484636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const rolesRows = [
      {
        name: enums.Roles.ADMIN,
        isActive: true,
        isDeleted: false,
      },
      {
        name: enums.Roles.MODERATOR,
        isActive: true,
        isDeleted: false,
      },
      {
        name: enums.Roles.DEFAULT,
        isActive: true,
        isDeleted: false,
      },
    ];

    await queryRunner.manager.createQueryBuilder().insert().into(Role).values(rolesRows).execute();

    const defaultRole = await queryRunner.manager
      .createQueryBuilder(Role, 'role')
      .where({ name: enums.Roles.DEFAULT })
      .getOne();

    if (defaultRole) {
      const userIds = await queryRunner.manager.createQueryBuilder(User, 'user').getMany();
      if (userIds.length > 0) {
        const userRoleRows = userIds.map((user) => ({
          userId: user.id,
          roleId: defaultRole.id,
        }));
        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into(UserRole)
          .values(userRoleRows)
          .execute();
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM userRole`);
    await queryRunner.query(`DELETE FROM role`);
  }
} */

export class tracksSeeds1675766031182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const channel = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'DR. Israr Ahmed'})
    .getOne();
    console.log(channel);
    
    if(channel){
        
        const tracks = [
            {
              name: 'Allah per tawakal',
              src:
                's3://ehsaan-stream-api-audio-bucket/dr-israr-ahmed/ALLAH PER TAWAKAL.mp3',
              channelId:channel.id,
              
            },
            {
              name: 'Discipline is very important for success',
              src:
                's3://ehsaan-stream-api-audio-bucket/dr-israr-ahmed/Discipline is very important for success.mp3',
              channelId:channel.id,
            },
            {
              name: 'Hazrat Umar(R.A) ka dore khilafat',
              src:
                's3://ehsaan-stream-api-audio-bucket/dr-israr-ahmed/Hazrat Umar(R.A) Ka Dore Khilafat.mp3',
              channelId:channel.id,
            },
            {
              name: 'Reality of life',
              src:
                's3://ehsaan-stream-api-audio-bucket/dr-israr-ahmed/Reality Of Life.mp3',
              channelId:channel.id,
            },
            // {
            //   name: 'Hijab ka hukum',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/dr-zakir-nayak/Hijab ka hukum.mp3',
            //   channelId:8,
            // },
            // {
            //   name: 'Is music haram in islam',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/dr-zakir-nayak/Is Music haram in islam.mp3',
            //   channelId:8,
            // },
            // {
            //   name: 'Namaz na parhny ki saza',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/dr-zakir-nayak/Namaz Na Parhny ki Saza.mp3',
            //   channelId:8,
            // },
            // {
            //   name: 'Why dawah is important',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/dr-zakir-nayak/Why dawah is important.mp3',
            //   channelId:8,
            // },
            // {
            //   name: 'Allah key liye apny nafs key khilaf.',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/junaid-jamshed/Allah Key Liye Apny Nafs Key Khilaf.mp3',
            //   channelId:6,
            // },
            // {
            //   name: 'Allah ki madad bandy ke sath',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/junaid-jamshed/Allah Ki Madad Bandy Ke Sath.mp3',
            //   channelId:6,
            // },
            // {
            //   name: 'Sbr krna sekh lo',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/junaid-jamshed/Sbr Krna Sekh Lo.mp3',
            //   channelId:6,
            // },
            // {
            //   name: 'When Abu Jahl began to die.',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/junaid-jamshed/When Abu Jahl began to die.mp3',
            //   channelId:6,
            // },
            // {
            //   name: 'Sahi ilm ke teen faidey',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/Khanqah-e-imdadia-Ashrafia/1564-Sahi-Ilm-ke-Teen-Faidey.mp3',
            //   channelId:9,
            // },
            // {
            //   name: 'Ahlullah ki zyarat aankho ki ibadat',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/Khanqah-e-imdadia-Ashrafia/Ahlullah-ki-Zyarat-Aankho-ki-Ibadat.mp3',
            //   channelId:9,
            // },
            // {
            //   name: 'Akhirat ki tayyari duniya mein hi karni hai.',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/Khanqah-e-imdadia-Ashrafia/Akhirat-ki-tayyari-duniya-mein-hi-karni-hai.mp3',
            //   channelId:9,
            // },
            // {
            //   name: 'Rabi-ul-awwal ki haqiqat',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/Khanqah-e-imdadia-Ashrafia/Rabi-ul-awwal-ki-Haqiqat.mp3',
            //   channelId:9,
            // },
            // {
            //   name: 'Astaghfar ki taqat aur fazilat',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-Ibadullah/Astaghfar Ki Taqat Aur Fazilat.mp3',
            //   channelId:5,
            // },
            // {
            //   name: 'Duniya aur akhirat ki zindagi',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-Ibadullah/Duniya aur akhirat ki zindagi.mp3',
            //   channelId:5,
            // },
            // {
            //   name: 'Ghusa khatm karain',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-Ibadullah/Ghusa khatm karain.mp3',
            //   channelId:5,
            // },
            // {
            //   name: 'Musalman ghaflat ki neend so raha hai',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-Ibadullah/Musalman ghaflat ki neend so raha hai.mp3',
            //   channelId:5,
            // },
            // {
            //   name: 'Allah sy mango',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-tariq-jameel/Allah sy Mango.mp3',
            //   channelId:3,
            // },
            // {
            //   name: 'Mout k bad kia huga',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-tariq-jameel/Mout K Bad Kia Huga.mp3',
            //   channelId:3,
            // },
            // {
            //   name: 'Sach ki taqat',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-tariq-jameel/Sach Ki Taqat.mp3',
            //   channelId:3,
            // },
            // {
            //   name: 'The way to success',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/molana-tariq-jameel/The Way to Success.mp3',
            //   channelId:3,
            // },
            // {
            //   name: 'Allah has a beautiful plan for you!',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-menk/ALLAH HAS A BEAUTIFUL PLAN FOR YOU!.mp3',
            //   channelId:4,
            // },
            // {
            //   name: 'How to protect yourself from evil',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-menk/How to Protect Yourself from Evil.mp3',
            //   channelId:4,
            // },
            // {
            //   name: 'Importance of TAHAJJUD',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-menk/Importance of TAHAJJUD.mp3',
            //   channelId:4,
            // },
            // {
            //   name: 'This 1 verse mentions 6 life changing things!',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-menk/This 1 verse mentions 6 life changing things!.mp3',
            //   channelId:4,
            // },
            // {
            //   name: 'Allah ki taraf say momin par azmaish',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-taqi-usmani/Allah Ki Taraf Say Momin Par Azmaish.mp3',
            //   channelId:2,
            // },
            // {
            //   name: 'Hamari nojawan nasal ka sab se bara masla',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-taqi-usmani/Hamari Nojawan Nasal Ka Sab Se Bara Masla.mp3',
            //   channelId:2,
            // },
            // {
            //   name: 'Kbhi mayoos nahi hona',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-taqi-usmani/Kbhi Mayoos Nahi hona.mp3',
            //   channelId:2,
            // },
            // {
            //   name: 'Marne k baad kaam ane wale amal',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-taqi-usmani/marne k baad kaam ane wale amal.mp3',
            //   channelId:2,
            // },
            // {
            //   name: 'Be namazi ka anjam',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-tariq-masood/Be Namazi Ka Anjam.mp3',
            //   channelId:1,
            // },
            // {
            //   name: 'Maut se pehle maut ki tayyari karlo',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-tariq-masood/Maut Se Pehle Maut Ki Tayyari Karlo.mp3',
            //   channelId:1,
            // },
            // {
            //   name: 'Musalmano ki barbadi ki wajah',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-tariq-masood/Musalmano Ki Barbadi Ki Wajah.mp3',
            //   channelId:1,
            // },
            // {
            //   name: 'Namaz na chorna',
            //   src:
            //     's3://ehsaan-stream-api-audio-bucket/mufti-tariq-masood/Namaz Na Chorna.mp3',
            //   channelId:1,
            // },
            
          ];
          console.log(tracks);
          
          await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(Track)
            .values(tracks)
            .execute();

    }
    
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM tracks`);
  }
}

