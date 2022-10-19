import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Scholar } from '../../scholars/entities/scholar.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  src: string;

  @ManyToOne(() => Scholar, (scholar) => scholar.tracks)
  scholar: Scholar;

  @Column({ default: true })
  isActive: boolean;
}
