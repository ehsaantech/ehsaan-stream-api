import { Module } from '@nestjs/common';
import { ChannelsService } from '../service/channels.service';
import { ChannelsController } from '../controller/channels.controller';
import { Channel } from '../entities/channel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from '../entities/track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel, Track])],
  controllers: [ChannelsController],
  providers: [ChannelsService],
})
export class ChannelsModule {}
