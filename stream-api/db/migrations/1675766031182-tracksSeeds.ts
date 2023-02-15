
import { Channel } from 'src/entities/channel.entity';
import { Track } from 'src/entities/track.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class tracksSeeds1675766031182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const channelDrIsrar = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'DR. Israr Ahmed'})
    .getOne();
    console.log(channelDrIsrar.id);

    const channelDrZakirNayak = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Zakir Naik'})
    .getOne();
    console.log(channelDrZakirNayak.id);

    const channelJunaidJamshed = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Junaid Jamshed'})
    .getOne();
    console.log(channelJunaidJamshed.id);

    const channelKhanqah = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Khanqah-e-Imdadia Ashrafia'})
    .getOne();
    console.log(channelKhanqah.id);

    const channelMoulanaIbadullah = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Moulana Ibadullah'})
    .getOne();
    console.log(channelMoulanaIbadullah.id);

    const channelMoulanaTariqJameel = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Moulana Tariq Jameel'})
    .getOne();
    console.log(channelMoulanaTariqJameel.id);

    const channelMuftiMenk = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Mufti Menk'})
    .getOne();
    console.log(channelMuftiMenk.id);

    const channelTaqiUsmani = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Mufti Taqi Usmani'})
    .getOne();
    console.log(channelTaqiUsmani.id);

    const channelTariqMasood = await queryRunner.manager
    .createQueryBuilder(Channel, 'channel')
    .where( {name:'Mufti Tariq Masood'})
    .getOne();
    console.log(channelTariqMasood.id);

      const tracks = [
            {
              name: 'Allah per tawakal',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/ALLAH PER TAWAKAL.mp3',
              channelId:channelDrIsrar.id,
              
            },
            {
              name: 'Discipline is very important for success',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Discipline is very important for success.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Hazrat Umar(R.A) ka dore khilafat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Hazrat Umar(R.A) Ka Dore Khilafat.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Reality of life',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Reality Of Life.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Hijab ka hukum',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Hijab ka hukum.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Is music haram in islam',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Is Music haram in islam.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Namaz na parhny ki saza',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Namaz Na Parhny ki Saza.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Why dawah is important',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Why dawah is important.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Allah key liye apny nafs key khilaf.',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Allah Key Liye Apny Nafs Key Khilaf.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Allah ki madad bandy ke sath',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Allah Ki Madad Bandy Ke Sath.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Sbr krna sekh lo',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Sbr Krna Sekh Lo.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'When Abu Jahl began to die.',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/When Abu Jahl began to die.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Sahi ilm ke teen faidey',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/1564-Sahi-Ilm-ke-Teen-Faidey.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Ahlullah ki zyarat aankho ki ibadat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Ahlullah-ki-Zyarat-Aankho-ki-Ibadat.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Akhirat ki tayyari duniya mein hi karni hai.',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Akhirat-ki-tayyari-duniya-mein-hi-karni-hai.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Rabi-ul-awwal ki haqiqat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Rabi-ul-awwal-ki-Haqiqat.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Astaghfar ki taqat aur fazilat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Astaghfar Ki Taqat Aur Fazilat.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Duniya aur akhirat ki zindagi',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Duniya aur akhirat ki zindagi.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Ghusa khatm karain',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Ghusa khatm karain.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Musalman ghaflat ki neend so raha hai',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Musalman ghaflat ki neend so raha hai.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Allah sy mango',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Allah sy Mango.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Mout k bad kia huga',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Mout K Bad Kia Huga.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Sach ki taqat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Sach Ki Taqat.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'The way to success',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/The Way to Success.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Allah has a beautiful plan for you!',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/ALLAH HAS A BEAUTIFUL PLAN FOR YOU!.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'How to protect yourself from evil',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/How to Protect Yourself from Evil.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Importance of TAHAJJUD',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Importance of TAHAJJUD.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'This 1 verse mentions 6 life changing things!',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/This 1 verse mentions 6 life changing things!.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Allah ki taraf say momin par azmaish',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Allah Ki Taraf Say Momin Par Azmaish.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Hamari nojawan nasal ka sab se bara masla',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Hamari Nojawan Nasal Ka Sab Se Bara Masla.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Kbhi mayoos nahi hona',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Kbhi Mayoos Nahi hona.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Marne k baad kaam ane wale amal',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/marne k baad kaam ane wale amal.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Be namazi ka anjam',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Be Namazi Ka Anjam.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Maut se pehle maut ki tayyari karlo',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Maut Se Pehle Maut Ki Tayyari Karlo.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Musalmano ki barbadi ki wajah',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Musalmano Ki Barbadi Ki Wajah.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Namaz na chorna',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Namaz Na Chorna.mp3',
              channelId:channelTariqMasood.id,
            },
            
          ];
          console.log(tracks);
          
          await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(Track)
            .values(tracks)
            .execute();

    }
    
    
  

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM tracks`);
  }
}

