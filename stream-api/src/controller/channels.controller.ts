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
import { ThumbnailFileUploadInterceptor } from 'src/interceptors/thumbnail-file-upload.interceptor';
import { createReadStream } from 'fs';
import { TracksFileUploadInterceptor } from 'src/interceptors/tracks-file-upload.interceptor';

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
    createChannelDto.thumbnailKey = file.filename
    const savedChannel = await this.channelsService.create(createChannelDto);
    return savedChannel;  
  }

  @Get()
  findAllChannels() {
    return this.channelsService.findAllChannels();
  }

  @Get('/thumbnails/:routeKey')
  async findChannelThumbnail(@Param('routeKey') routeKey: string, @Res() res: Response) {
    try {
      const filePath = await this.channelsService.getThumbnail(routeKey);
      res.setHeader('Content-Type', 'image/jpeg');
      createReadStream(filePath).pipe(res);
    } catch (error) {
      throw new NotFoundException('File not found');
    }
  }

  @Get(':routeKey')
  findChannelByID(@Param('routeKey') routeKey: string) {
    return this.channelsService.findChannelByRoute(routeKey);
  }

  @Patch(':routeKey')
  updateChannel(
    @Param('routeKey') routeKey: string,
    @Body() updateChannelDto: UpdateChannelDto,
  ) {
    return this.channelsService.updateChannel(routeKey, updateChannelDto);
  }

  @Delete(':routeKey')
  removeChannel(@Param('routeKey') routeKey: string) {
    return this.channelsService.removeChannel(routeKey);
  }

  @Post(':routeKey/tracks')
  @UseInterceptors(TracksFileUploadInterceptor)
  async createChannelTracks(
    @Param('routeKey') routeKey: string,
    @UploadedFile() file,
    @Body() createTrackDto: CreateTrackDto,
  ) {
    createTrackDto.srcKey = file.filename
    return await this.channelsService.createChannelTracks(routeKey, createTrackDto);
  }

  @Get('/tracks/list')
  findAlltracks() {
      return this.channelsService.getAllTracks();
  } 

  @Get(':routeKey/tracks/:id')
  async playChannelTracks(
    @Param('routeKey') routeKey: string,
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response) {
    try {
      const filePath = await this.channelsService.playTracks(routeKey,  id);
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
