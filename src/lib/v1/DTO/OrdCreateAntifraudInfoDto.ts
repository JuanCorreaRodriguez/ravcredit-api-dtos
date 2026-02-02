import {IsString} from 'class-validator';

export class OrdCreateAntifraudInfoDto {
  @IsString()
  newKey: string;
}
