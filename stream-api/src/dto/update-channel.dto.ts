import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelDto } from './create-channel.dto';

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
  englishName: string;
  arabicName: string;
  channelRoute:string;
  thumbnail: string;
  description:string;
}
