import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelDto } from './create-channel.dto';

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
  englishName: string;
  arabicName: string;
  routeKey:string;
  thumbnailKey: string;
  description:string;
}
