import {IsString} from 'class-validator';

export class ConektaChannelDto {
  @IsString()
  segment: string;

  @IsString()
  checkout_request_id: string;

  @IsString()
  checkout_request_type: string;

  @IsString()
  id: string;
}
