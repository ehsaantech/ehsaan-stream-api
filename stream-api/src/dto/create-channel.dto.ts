import { IsNotEmpty } from "class-validator";

export class CreateChannelDto {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  thumbnail: string;

  @IsNotEmpty()
  description: string;
}
