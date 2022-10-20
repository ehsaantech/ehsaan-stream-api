import { Channel } from 'src/entities/channel.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  src: string;

  @ManyToOne(() => Channel, (channel) => channel.tracks)
  channel: Channel;

  @Column({ default: true })
  isActive: boolean;
}
