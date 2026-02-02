import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ScoreAddressDto {
  @IsString()
  CP: string = "";

  @IsString()
  ciudad: string = "";

  @IsString()
  estado: string = "";

  @IsString()
  domicilio: string = "";

  @IsString()
  coloniaPoblacion: string = "";

  @IsString()
  delegacionMunicipio: string = "";
}

export class ScoreHitDto {
  @IsString()
  valor: string = "";
}

export class ScoreNoHitDto {
  @IsString()
  date: string = "";

  @IsString()
  score: string = "";

  @IsString()
  message: string = "";

  @IsString()
  evaluation: string = "";
}

export class ScoreGeneralDto {
  @IsString()
  nombres: string = "";

  @IsString()
  apellidoMaterno: string = "";

  @IsString()
  apellidoPaterno: string = "";

  @IsString()
  fechaNacimiento: string = "";
}

export class ScoreDto {
  @ValidateNested()
  @Type(() => ScoreAddressDto)
  domicilio: ScoreAddressDto = new ScoreAddressDto();

  @ValidateNested()
  @Type(() => ScoreHitDto)
  scoreNoHit: ScoreHitDto = new ScoreHitDto();

  @IsString()
  folioConsulta: string = "";

  @ValidateNested()
  @Type(() => ScoreGeneralDto)
  datosGenerales: ScoreGeneralDto = new ScoreGeneralDto();
}
