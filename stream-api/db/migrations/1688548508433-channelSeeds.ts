import { Channel } from 'src/entities/channel.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class channelSeeds1688548508433 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const channels = [
      {
        englishName: 'Mufti Tariq Masood',
        channelRoute: '@MuftiTM',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MuftiTM.a054405422c490efe350.jpg',
        description: 'Tariq Masood is a Pakistani Deobandi author and Islamic scholar, who teaches at the Jamia Tur Rasheed seminary in Karachi He has authored books Including Aik se Zaid Shadiyoon ki Zaroorat Kyu.',
      },
      {
        englishName: 'Mufti Taqi Usmani',
        channelRoute: '@taqiusmani',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/mtu.5fe7b7f242a41174c876.png',
        description: "Muhammad Taqi Usmani (born 5 October 1943) is a Pakistani Islamic scholar and former judge who is the current president of the Wifaq ul Madaris Al-Arabia and the vice president and Hadith professor of the Darul Uloom Karachi. An intellectual leader of the Deobandi movement, he has authored 143 books in Urdu, Arabic and English, including a translation of the Qur'an in both English and Urdu as well a 6-volume commentary on the Sahih Muslim in Arabic",
      },
      {
        englishName: 'Moulana Tariq Jameel',
        channelRoute: '@MTJ',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MTJ.864095e1efe8acf0cf7d.png',
        description: 'Moulana Tariq Jamil, is a Pakistani religious writer, scholar, and a member of the Tablighi Jamaat. The recipient of the Pride of Performance award, Moulana Tariq Jameel has been named twice in The 500 Most Influential Muslims.',
      },
      {
        englishName: 'Mufti Menk',
        channelRoute: '@menk',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/muftimenk.8397eebddd2a447344a5.jpg',
        description: "Ismail ibn Musa Menk, also known as Mufti Menk, is a Zimbabwean Islamic scholar. He is the Grand Mufti and head of the fatwa department of the Zimbabwean Muslim community, which represents less than 1% of the country's total population.",
      },
      {
        englishName: 'Moulana Ibadullah',
        channelRoute: '@IBD',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/MIBD.e377109ae87d76be2991.jpg',
        description: 'Moulana Ibadullah, is a Pakistani religious writer and a member of the Tablighi Jamaat.',
      },
      {
        englishName: 'Junaid Jamshed',
        channelRoute: '@J.',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/DR.4306c10bd0b46c540586.png',
        description: "Junaid jamshed was a Pakistani singer-songwriter, television personality, fashion designer, actor, and preacher.As early as 1999, the media began speculating about Jamshed's drift from music soon after the Vital Signs faded away. The speculations soon died after Jamshed released his solo albums and continued world tours. After 2001, Jamshed disappeared from the public eye and avoided media attention",
      },
      {
        englishName: 'DR. Israr Ahmed',
        channelRoute: '@IsrarAhmed',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/DR.4306c10bd0b46c540586.png',
        description: 'Israr Ahmad was a Pakistani Islamic theologian, philosopher, and Islamic scholar who was followed particularly in South Asia as well as by South Asian Muslims in the Middle East, Western Europe, and North America. He was the founder of Tanzeem-e-Islami, an offshoot of the Jamaat-e-Islami.',
      },
      {
        englishName: 'Zakir Naik',
        channelRoute: '@zakirnaik',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/ZN.a623f8954e10194df55b.png',
        description: 'Zakir Abdul Karim Naik is an Indian Islamic televangelist and public orator who focuses on comparative religion. He is the founder and president of the Islamic Research Foundation and the Peace TV Network.',
      },
      {
        englishName: 'Khanqah-e-imdadia Ashrafia',
        channelRoute: '@khanqah',
        thumbnail:
          'https://ehsaan-stream.web.app/static/media/khanqah.795f0b857dc3e97266a7.png',
          
        description: 'Khanqah Imdadia Ashrafia is in the memory of Hakeemul Ummat Mujaddid e Millat Hazrat Maulana Ashraf Ali Sahab Thanvi (RA). Khanqah is the spiritual center providing a facility for Islah-e-Nafs (Self Correction). Following the traditions of the Ehl-e-Haq (Truth Bearers), Khanqah revives the rare traditions of Sulook, Tazkia, & Tassawuf while staying clear of all kinds of Bidda’hs (innovations in the religion) and complies strictly with the rules and boundaries prescribed by the Sharia.',
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
    await queryRunner.query(`DELETE FROM channel`);
  }
}
