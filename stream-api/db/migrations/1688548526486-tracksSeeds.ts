import { Channel } from 'src/entities/channel.entity';
import { Track } from 'src/entities/track.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class tracksSeeds1688548526486 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

      const channelDrIsrar = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'DR. Israr Ahmed'})
      .getOne();

      const channelDrZakirNayak = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Zakir Naik'})
      .getOne();

      const channelJunaidJamshed = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Junaid Jamshed'})
      .getOne();

      const channelKhanqah = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Khanqah-e-Imdadia Ashrafia'})
      .getOne();

      const channelMoulanaIbadullah = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Moulana Ibadullah'})
      .getOne();

      const channelMoulanaTariqJameel = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Moulana Tariq Jameel'})
      .getOne();

      const channelMuftiMenk = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Mufti Menk'})
      .getOne();

      const channelTaqiUsmani = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Mufti Taqi Usmani'})
      .getOne();

      const channelTariqMasood = await queryRunner.manager
      .createQueryBuilder(Channel, 'channel')
      .where( {englishName:'Mufti Tariq Masood'})
      .getOne();

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
              name: 'Allah ki mohaabat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Allah ki mohaabat.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Allah ki mohaabat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Allah ki mohaabat.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Aurat ki Awaz ka Parda',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Aurat ki Awaz ka Parda.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Azmaish ki haqeqat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Azmaish ki haqeqat.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Dil ka sakoon',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Dil ka sakoon.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'How to control your mind',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/How to control your mind.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Muqaddar Mein Jo Likha Hai Zrore Milay Ga',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Muqaddar Mein Jo Likha Hai Zrore Milay Ga.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Namaz Mai dil Q nhi lagta',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Namaz Mai dil Q nhi lagta.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Qayamat Ki 7 Bari Nishaniyan',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Qayamat Ki 7 Bari Nishaniyan.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Ramzan ki fazilat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Ramzan ki fazilat.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Surah Ar-Rahman Mein 4 Ajeeb Haqaiq',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Surah Ar-Rahman Mein 4 Ajeeb Haqaiq.mp3',
              channelId:channelDrIsrar.id,
            },
            {
              name: 'Zindagi mei kese khush rahe',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-israr-ahmed/Zindagi mei kese khush rahe.mp3',
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
              name: 'A 9 year Old Christian Boy Asks a Very Difficult Question to Dr Zakir Naik',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/A 9 year Old Christian Boy Asks a Very Difficult Question to Dr Zakir Naik.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'A Chinese Asks Why Does Not Allah Show Himself in Islam',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/A Chinese Asks Why Does Not Allah Show Himself in Islam.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Christian Lady had Heated Exchange with Dr. Zakir about Jesus',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Christian Lady had Heated Exchange with Dr. Zakir about Jesus.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Deen or duniya mein hamen kaise Islam per chalna chahie',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Deen or duniya mein hamen kaise Islam per chalna chahie.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Dr Zakir Naik a challenge between Hindu',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Dr Zakir Naik a challenge between Hindu.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Mary Challenges Dr Zakir that Bible mentions Jesus (pbuh) is God',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Mary Challenges Dr Zakir that Bible mentions Jesus (pbuh) is God.mp3',
              channelId:channelDrZakirNayak.id,
            },
            {
              name: 'Why Did not God Create Only One Religion',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/dr-zakir-nayak/Why Did not God Create Only One Religion.mp3',
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
              name: '4 Moqey Ha Jin Per Allah Muskraty',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/4 Moqey Ha Jin Per Allah Muskraty.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Allah Ney Insan Ko Zamen Per',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Allah Ney Insan Ko Zamen Per.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Allah Pe Yaqen Rukh',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Allah Pe Yaqen Rukh.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Dil Main Khwahshait',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Dil Main Khwahshait.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Duniya Dhoky Ka Ghr Hai',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Duniya Dhoky Ka Ghr Hai.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Hamara Subse Bara Qasor Kia Hai',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Hamara Subse Bara Qasor Kia Hai.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Insan ko duniya mei bhejne ka maqsad',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Insan ko duniya mei bhejne ka maqsad.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Jis Qoam Mein Be Hayai Aaam Ho',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Jis Qoam Mein Be Hayai Aaam Ho.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Jis Shuks Ney Fajar Ki Namaz Chori.mp3',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Jis Shuks Ney Fajar Ki Namaz Chori.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Kamyabi Ki Shaqal Or Iski Haqeqat.mp3',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Kamyabi Ki Shaqal Or Iski Haqeqat.mp3',
              channelId:channelJunaidJamshed.id,
            },
            {
              name: 'Yeah Dua Qasrat Sey Mango Kro',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/junaid-jamshed/Yeah Dua Qasrat Sey Mango Kro.mp3',
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
              name: "Allah Ta'ala Ki Muhabbat Aur Dunia Ka Gham",
              src:
                "https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Allah Ta'ala Ki Muhabbat Aur Dunia Ka Gham.mp3",
              channelId:channelKhanqah.id,
            },
            {
              name: 'Buzurgon se seekhne ki chand bate',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Buzurgon se seekhne ki chand bate.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Dua Kese Mangen',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Dua Kese Mangen.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Maghfirat Ka Mafhoom',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/Maghfirat Ka Mafhoom.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'taqwa ky saat inaamaat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/taqwa ky saat inaamaat.mp3',
              channelId:channelKhanqah.id,
            },
            {
              name: 'Waliullah Bannay Ka Asaan Nuskha',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/Khanqah-e-imdadia-Ashrafia/ Waliullah Bannay Ka Asaan Nuskha.mp3',
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
              name: '3 person in the responsibility of Allah',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/3 person in the responsibility of Allah.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Azaan Me 6 Paigaam Hen',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Azaan Me 6 Paigaam Hen.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Maghfirat ki Raat',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Maghfirat ki Raat.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Razaq Allah ki zaat hai',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Razaq Allah ki zaat hai.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Rehmatain Aur Barkatain Ainge',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Rehmatain Aur Barkatain Ainge.mp3',
              channelId:channelMoulanaIbadullah.id,
            },
            {
              name: 'Ye Duniya khel tamasha hai',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-Ibadullah/Ye Duniya khel tamasha hai.mp3',
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
              name: 'Qayamat Ke Din Nafsi Nafsi Ka Alam',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Qayamat Ke Din Nafsi Nafsi Ka Alam.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Jung e badar 17 Ramadan',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Jung e badar 17 Ramadan.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Jab Farishte Bhi Roye',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Jab Farishte Bhi Roye.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Who Will Enter Jannah First',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Who Will Enter Jannah First.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Hazrat Khalid Bin Waleed(R.A) Battle of Yarmouk',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Hazrat Khalid Bin Waleed(R.A) Battle of Yarmouk .mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Hazrat Bilal Habshi R.A Ka Waqia',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Hazrat Bilal Habshi R.A Ka Waqia.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Emaan Ka Noor Kaha Milega',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Emaan Ka Noor Kaha Milenga.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Ek Baap Ka Dard Bhara Waqia',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Ek Baap Ka Dard Bhara Waqia.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Do one Thing Before Sleeping',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Do one Thing Before Sleeping.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Allah love for Prophet Muhammed PBUH',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Allah love for Prophet Muhammed PBUH.mp3',
              channelId:channelMoulanaTariqJameel.id,
            },
            {
              name: 'Allah ko kese Razi kare',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/molana-tariq-jameel/Allah ko kisa Razi kara.mp3',
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
              name: 'Trust Allah! He is in Control',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Trust Allah! He is in Control.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: "Keep Moving. Don't Look Back",
              src:
                "https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Keep Moving. Don't Look Back.mp3",
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Allah is greater than your problem.',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Allah is greater than your problem.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Comfort in times of crisis',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Comfort in times of crisis.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Heal your Depression',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Heal your Depression.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Importance of Ramadaan',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Importance of Ramadaan.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Miracles of Praying',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Miracles of Praying.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Silence is Golden, The Power of being Silent',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Silence is Golden, The Power of being Silent.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Too Lazy To Pray',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Too Lazy To Pray.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'Why Am I Muslim?',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/Why Am I Muslim?.mp3',
              channelId:channelMuftiMenk.id,
            },
            {
              name: 'WHY IS MY LIFE SO SAD, MISERABLE AND LONELY',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-menk/WHY IS MY LIFE SO SAD, MISERABLE AND LONELY.mp3',
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
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/KbhWHY IS MY LIFE SO SAD, MISERABLE AND LONELYi Mayoos Nahi hona.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Marne k baad kaam ane wale amal',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/marne k baad kaam ane wale amal.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
                name: 'Deen Naam Hai 5 Shobon Ka',
                src:
                  'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Deen Name Hai 5 Shobon Ka.mp3',
                channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Important Message for Students',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Important Message for Students.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'KABAR MEIN MUSLALMAN AUR GAIR MUSLIM KE SATH KYA HO GA',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/KABAR MEIN MUSLALMAN AUR GAIR MUSLIM KE SATH KYA HO GA.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Musalmano ko taqleef dene ka wabaal',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Musalmano ko taqleef dene ka wabaal.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Namaz mei khayalt',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Namaz mei khayalt.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Qabooliat amaal ki 3 sharait',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Qabooliat amaal ki 3 sharait.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Ramazan Is Tarah Guzaro Taqwa Hasil Hoga',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Ramazan Is Tarah Guzaro Taqwa Hasil Hoga.mp3',
              channelId:channelTaqiUsmani.id,
            },
            {
              name: 'Ramzan Gafil Bando Ko ALLAH K Qareeb Karne Ka Mahina',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-taqi-usmani/Ramzan Gafil Bando Ko ALLAH K Qareeb Karne Ka Mahina.mp3',
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
            {
              name: 'Tension lene ka nuqsan',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Tension lene ka nuqsan.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Ye Kaam Karo Rizq Izzat Ke Saath Darwaze Tod Kar Aayega',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Ye Kaam Karo Rizq Izzat Ke Saath Darwaze Tod Kar Aayega.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Aakhri Jannati Ka Dilchasp Waqia',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Aakhri Jannati Ka Dilchasp Waqia.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'ALLAH Se Mango',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/ALLAH Se Mango.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Ghazwa Tabook Aur Hazrat Ka’ab Bin Malik (R.A) Ka Waqia.mp3',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Ghazwa Tabook Aur Hazrat Ka’ab Bin Malik (R.A) Ka Waqia.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Hazrat Umar Ka Darbaar Aur 3 Sahaba Ka Waqia',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Hazrat Umar Ka Darbaar Aur 3 Sahaba Ka Waqia.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'khamosh rehana sikhiey',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/khamosh rehana sikhiey.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Mar Kar Dobara Zinda Hone Par Tum Shaq Kyun Karte Ho',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Mar Kar Dobara Zinda Hone Par Tum Shaq Kyun Karte Ho.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Nabi ki namaz e janaza kyo nhi huyi',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Nabi ki namaz e janaza kyo nhi huyi .mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Nabi saw Or 3 Sahaba ka Waqia',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Nabi saw Or 3 Sahaba ka Waqia.mp3',
              channelId:channelTariqMasood.id,
            },
            {
              name: 'Success ka Formula',
              src:
                'https://d3aw1qwnchob5o.cloudfront.net/mufti-tariq-masood/Success ka Formula.mp3',
              channelId:channelTariqMasood.id,
            },      
          ];
          
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

