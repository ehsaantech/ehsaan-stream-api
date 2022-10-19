import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column({ default: true })
  isActive: boolean;
}
