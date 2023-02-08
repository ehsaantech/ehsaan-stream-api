import { Track } from './track.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('channel')
export class Channel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column()
  description: string;

  @OneToMany(() => Track, (tracks) => tracks.channel)
  tracks: Track;

  @Column({ default: true })
  isActive: boolean;
}
