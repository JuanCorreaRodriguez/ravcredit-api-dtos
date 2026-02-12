import {IsOptional, IsString} from 'class-validator';

export class AddressDto {

    @IsString()
    street: string = "";

    @IsString()
    city: string = "";

    @IsString()
    neighbor: string = "";

    @IsString()
    zip: string = "";

    @IsString()
    ext: string = "";

    @IsString()
    @IsOptional()
    int: string = "";

    @IsString()
    state: string = "";
}
