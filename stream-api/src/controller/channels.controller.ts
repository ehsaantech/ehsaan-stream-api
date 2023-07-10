import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
  ParseIntPipe,
  UploadedFile,
  Res,
  NotFoundException,
  
} from '@nestjs/common';
import { Response } from 'express';
import { ChannelsService } from '../service/channels.service';
import { CreateChannelDto } from '../dto/create-channel.dto';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateChannelDto } from '../dto/update-channel.dto';
import { UpdateTrackDto } from 'src/dto/update-track.dto';
import { ThumbnailFileUploadInterceptor } from 'interceptors/thumbnail-file-upload.interceptor';
import { createReadStream } from 'fs';
import { TracksFileUploadInterceptor } from 'interceptors/tracks-file-upload.interceptor';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/v1/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post()
  @UseInterceptors(ThumbnailFileUploadInterceptor)
  async create( 
    @UploadedFile() file,
    @Body() createChannelDto: CreateChannelDto,
  ){
    createChannelDto.thumbnail = file.filename
    const savedChannel = await this.channelsService.create(createChannelDto);
    return savedChannel;  
  }

  @Get()
  findAllChannels() {
    return this.channelsService.findAllChannels();
  }

  @Get('/thumbnails/:channelRoute')
  async findChannelThumbnail(@Param('channelRoute') channelRoute: string, @Res() res: Response) {
    try {
      const filePath = await this.channelsService.getThumbnail(channelRoute);
      res.setHeader('Content-Type', 'image/jpeg');
      createReadStream(filePath).pipe(res);
    } catch (error) {
      throw new NotFoundException('File not found');
    }
  }

  @Get(':channelRoute')
  findChannelByID(@Param('channelRoute') channelRoute: string) {
    return this.channelsService.findChannelByRoute(channelRoute);
  }

  @Patch(':channelRoute')
  updateChannel(
    @Param('channelRoute') channelRoute: string,
    @Body() updateChannelDto: UpdateChannelDto,
  ) {
    return this.channelsService.updateChannel(channelRoute, updateChannelDto);
  }

  @Delete(':channelRoute')
  removeChannel(@Param('channelRoute') channelRoute: string) {
    return this.channelsService.removeChannel(channelRoute);
  }

  @Post(':channelRoute/tracks')
  @UseInterceptors(TracksFileUploadInterceptor)
  async createChannelTracks(
    @Param('channelRoute') channelRoute: string,
    @UploadedFile() file,
    @Body() createTrackDto: CreateTrackDto,
  ) {
    createTrackDto.src = file.filename
    return await this.channelsService.createChannelTracks(channelRoute, createTrackDto);
  }

  @Get('/tracks/list')
  findAlltracks() {
      return this.channelsService.getAllTracks();
  } 

  @Get(':channelRoute/tracks/:id')
  async playChannelTracks(
    @Param('channelRoute') channelRoute: string,
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response) {
    try {
      const filePath = await this.channelsService.playTracks(channelRoute,  id);
      res.setHeader('Content-Type', 'audio/*');
      createReadStream(filePath).pipe(res);
    } catch (error) {
      throw new NotFoundException('File not found');
    }
  }

  @Get('/tracks/:id')
  findTrackByID(@Param('id') id: string) {
    return this.channelsService.findTrackByID(+id);
  }

  @Patch('/tracks/:id')
  updatetrack(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    return this.channelsService.updateTrack(+id, updateTrackDto);
  }
  
  @Delete('/tracks/:id')
  removeTrack(@Param('id') id: string) {
    return this.channelsService.removeTrack(+id);
  }

}
