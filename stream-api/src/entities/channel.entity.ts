import { Track } from './track.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('channel')
export class Channel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  englishName: string;
  
  @Column()
  arabicName: string;

  @Column({unique:true})
  channelRoute: string;

  @Column()
  thumbnail: string;

  @Column()
  description: string;

  @OneToMany(() => Track, (tracks) => tracks.channel,{ onDelete: 'CASCADE' })
  tracks: Track;

  @Column({ default: true })
  isActive: boolean;
}
