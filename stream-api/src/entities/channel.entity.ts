import { Track } from './track.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
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
