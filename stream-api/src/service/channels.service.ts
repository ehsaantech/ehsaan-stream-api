import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from '../entities/track.entity';
import { CreateTrackParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateChannelDto } from '../dto/create-channel.dto';
import { UpdateChannelDto } from '../dto/update-channel.dto';
import { Channel } from '../entities/channel.entity';
import { UpdateTrackDto } from 'src/dto/update-track.dto';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel) private channelRepository: Repository<Channel>,
    @InjectRepository(Track) private trackRepository: Repository<Track>,
  ) {}
  async create(createChannelDto: CreateChannelDto) {
    const newChannel = this.channelRepository.create(createChannelDto);
    await this.channelRepository.save(newChannel);
    return newChannel;
  }

  async findAllChannels() {
    const findChannels = await this.channelRepository.find({ take: 10 }); // SELECT * from channel
    return findChannels;
  }

  findChannelByID(id: number) {
    return this.channelRepository.findOne({
      relations: { tracks: true },
      where: { id },
    });
  }

  async updateChannel(id: number, updateChannelDto: UpdateChannelDto) {
    const channels = await this.findChannelByID(id);
    return this.channelRepository.save({ ...channels, ...updateChannelDto });
  }

  async removeChannel(id: number) {
    const channel = await this.findChannelByID(id);
    return this.channelRepository.remove(channel);
  }

  async createChannelTracks(id: number, createTracks: CreateTrackParams) {
    const channel = await this.channelRepository.findOneBy({ id });
    if (!channel)
      throw new HttpException(
        'Channel not found. Cannot create Tracks',
        HttpStatus.BAD_REQUEST,
      );
    const newTrack = this.trackRepository.create({
      ...createTracks,
      channel,
    });
    return this.trackRepository.save(newTrack);
  }

  getAllTracks() {
    return this.trackRepository.find({ relations: ['channel'] });
  }

  findTrackByID(id: number) {
    return this.trackRepository.findOne({
      relations: { channel: true },
      where: { id },
    });
  }

  async updateTrack(id: number, updateTrackDto: UpdateTrackDto) {
    const tracks = await this.findTrackByID(id);
    return this.trackRepository.save({ ...tracks, ...updateTrackDto });
  }

  async removeTrack(id: number) {
    const tracks = await this.findTrackByID(id);
    return this.trackRepository.remove(tracks);
  }
}
