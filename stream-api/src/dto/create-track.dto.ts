import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateTrackDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUrl(undefined, { message: 'track is not valid.' })
  src: string; 
}
