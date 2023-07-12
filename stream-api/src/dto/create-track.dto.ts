import { IsNotEmpty } from "class-validator";

export class CreateTrackDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  src: string;
}
