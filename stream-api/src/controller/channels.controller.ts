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
  create(@Body() createChannelDto: CreateChannelDto) {
    return this.channelsService.create(createChannelDto);
  }

  @Get()
  findAllChannels() {
    return this.channelsService.findAllChannels();
  }

  @Get(':id')
  findChannelByID(@Param('id') id: string) {
    return this.channelsService.findChannelByID(+id);
  }

  @Patch(':id')
  updateChannel(
    @Param('id') id: string,
    @Body() updateChannelDto: UpdateChannelDto,
  ) {
    return this.channelsService.updateChannel(+id, updateChannelDto);
  }

  @Delete(':id')
  removeChannel(@Param('id') id: string) {
    return this.channelsService.removeChannel(+id);
  }

  @Post(':id/tracks')
  createChannelTracks(
    @Param('id') id: string,
    @Body() createTrackDto: CreateTrackDto,
  ) {
    return this.channelsService.createChannelTracks(+id, createTrackDto);
  }

  @Get('/tracks')
  findAlltracks() {
    return this.channelsService.getAllTracks();
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
