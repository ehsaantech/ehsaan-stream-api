import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateChannelDto {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @IsUrl(undefined, { message: 'thumbnail is not valid.' })
  thumbnail: string;

  @IsNotEmpty()
  description: string;
}
