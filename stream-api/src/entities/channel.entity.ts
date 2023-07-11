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
  routeKey: string;

  @Column()
  thumbnailkey: string;

  @Column()
  description: string;

  @OneToMany(() => Track, (tracks) => tracks.channel,{ onDelete: 'CASCADE' })
  tracks: Track;

  @Column({ default: true })
  isActive: boolean;
}
