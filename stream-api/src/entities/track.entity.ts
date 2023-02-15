import { Channel } from 'src/entities/channel.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  src: string;

  @ManyToOne(() => Channel, (channel) => channel.tracks, { nullable: false })
  @JoinColumn({
    name: 'channelId',
    referencedColumnName: 'id',
  })
  public channel: Channel;

  @Column()
  channelId: number;
  
  @Column({ default: true })
  isActive: boolean;
}
 