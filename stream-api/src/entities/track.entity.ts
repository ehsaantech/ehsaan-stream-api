import { Channel } from 'src/entities/channel.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  srcKey: string;

  @ManyToOne(() => Channel, (channel) => channel.tracks, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'channelId',
    referencedColumnName: 'id',
  })
  channel: Channel;

  @Column()
  channelId: number;
  
  @Column({ default: true })
  isActive: boolean;
}
 