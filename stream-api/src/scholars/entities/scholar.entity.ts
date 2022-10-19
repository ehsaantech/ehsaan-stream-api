import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Channel } from 'src/channels/entities/channel.entity';
import { Track } from 'src/tracks/entities/track.entity';

@Entity()
export class Scholar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToOne(() => Channel)
  @JoinColumn()
  channel: Channel;

  @OneToMany(() => Track, (tracks) => tracks.scholar)
  tracks: Track[];

  @Column({ default: true })
  isActive: boolean;
}
