import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { join } from 'path';
import { statSync } from 'fs';
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
    const routeKey = createChannelDto.routeKey;

    const existingChannel = await this.channelRepository.findOne({
      where: { routeKey } 
    });

    if (existingChannel) {
      throw new HttpException('This channel already exists', HttpStatus.BAD_REQUEST);
    }
    
    const newChannel = this.channelRepository.create(createChannelDto);
    await this.channelRepository.save(newChannel);
    return newChannel;
  }

  async findAllChannels() {
    const findChannels = await this.channelRepository.find({ take: 10 });
    return findChannels;    
  }

  async getThumbnail(routeKey: string): Promise<string> {
    const channel = await this.channelRepository.findOne(
      {
        select:{ thumbnailKey:true },
        where:{ routeKey }
      });
  
    if (!channel) {
      throw new HttpException('Thumbnail not found', HttpStatus.BAD_REQUEST);
    }
  
    const filePath = join(process.cwd(), 'uploads/thumbnails', channel.thumbnailKey);
    const fileStats = statSync(filePath);
  
    if (!fileStats.isFile()) {
      throw new NotFoundException('File not found');
    }
  
    return filePath;
  }

  async findChannelByRoute(routeKey: string) {
    const channels = await this.channelRepository.findOne({
      relations: { tracks: true },
      where: { routeKey },
    });
    if(!channels){
      throw new HttpException("No channel found", HttpStatus.BAD_REQUEST);
    }
    return channels;
  }

  async updateChannel(routeKey: string, updateChannelDto: UpdateChannelDto) {
    const channels = await this.findChannelByRoute(routeKey);
    return this.channelRepository.save({ ...channels, ...updateChannelDto });
  }

  async removeChannel(routeKey: string) {
    const channel = await this.findChannelByRoute(routeKey);

    if(!channel){
      throw new HttpException("No channel found", HttpStatus.BAD_REQUEST);
    }
    const deleteChannel = await this.channelRepository.remove(channel);
    
    return "Channel deleted successfully!"
  }

  async createChannelTracks(routeKey: string, createTracks: CreateTrackParams) {
    const channel = await this.channelRepository.findOneBy({ routeKey });
     
    if (!channel)
      throw new HttpException(
        'Channel not found. Cannot create Tracks',
        HttpStatus.BAD_REQUEST,
      );
          
    const channelId = channel.id;
  
    const newTrack = this.trackRepository.create({
      ...createTracks,
      channelId
    });
    
    return this.trackRepository.save(newTrack);
  }

  getAllTracks() {
    return this.trackRepository.find();
  }

  async playTracks( routeKey: string, id: number ): Promise<string> {

    const channel = await this.channelRepository.findOne({ where: { routeKey } });

    if (!channel) {
      throw new NotFoundException('Channel not found');
    }

    const tracks = await this.trackRepository.findOne(
      { where: { id } });
  
    if (!tracks) {
      throw new HttpException('No track was found', HttpStatus.BAD_REQUEST);
    }
  
    const filePath = join(process.cwd(), 'uploads/tracks', tracks.srcKey);
    
    const fileStats = statSync(filePath);
  
    if (!fileStats.isFile()) {
      throw new NotFoundException('File not found');
    }
  
    return filePath;
  }

  async findTrackByID(id: number) {    
    const tracks =  await this.trackRepository.findOne({
      relations: { channel: true },
      where: { id },
    });
    if(!tracks){
      throw new HttpException("No track was found", HttpStatus.BAD_REQUEST);
    }
    return tracks;
  }

  async updateTrack(id: number, updateTrackDto: UpdateTrackDto) {
    const tracks = await this.findTrackByID(id);
    return this.trackRepository.save({ ...tracks, ...updateTrackDto });
  }

  async removeTrack(id: number) {
    const tracks = await this.findTrackByID(id);    
    const deleteTracks = await this.trackRepository.remove(tracks);
    return "Track deleted successfully"
  }

}
