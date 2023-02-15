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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelsService } from '../service/channels.service';
import { CreateChannelDto } from '../dto/create-channel.dto';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateChannelDto } from '../dto/update-channel.dto';
import { UpdateTrackDto } from 'src/dto/update-track.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/v1/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createChannelDto: CreateChannelDto) {
    return this.channelsService.create(createChannelDto);
  }

  @Get()
  findAllChannels() {
    return this.channelsService.findAllChannels();
  }

  @Get('/tracks')
  findAlltracks() {
      return this.channelsService.getAllTracks();
  } 

  @Get(':id')
  findChannelByID(@Param('id',ParseIntPipe) id: number) {
    return this.channelsService.findChannelByID(id);
  }

  @Patch(':id')
  updateChannel(
    @Param('id',ParseIntPipe) id: number,
    @Body() updateChannelDto: UpdateChannelDto,
  ) {
    return this.channelsService.updateChannel(id, updateChannelDto);
  }

  @Delete(':id')
  removeChannel(@Param('id',ParseIntPipe) id: number) {
    return this.channelsService.removeChannel(id);
  }

  @Post(':id/tracks')
  @UsePipes(ValidationPipe)
  createChannelTracks(
    @Param('id',ParseIntPipe) id: number,
    @Body() createTrackDto: CreateTrackDto,
  ) {
    return this.channelsService.createChannelTracks(id, createTrackDto);
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
  removeTrack(@Param(':id') id: string) {
    return this.channelsService.removeTrack(+id);
  }
}
