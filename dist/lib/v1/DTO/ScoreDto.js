var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class ScoreAddressDto {
    CP = "";
    ciudad = "";
    estado = "";
    domicilio = "";
    coloniaPoblacion = "";
    delegacionMunicipio = "";
}
__decorate([
    IsString()
], ScoreAddressDto.prototype, "CP", void 0);
__decorate([
    IsString()
], ScoreAddressDto.prototype, "ciudad", void 0);
__decorate([
    IsString()
], ScoreAddressDto.prototype, "estado", void 0);
__decorate([
    IsString()
], ScoreAddressDto.prototype, "domicilio", void 0);
__decorate([
    IsString()
], ScoreAddressDto.prototype, "coloniaPoblacion", void 0);
__decorate([
    IsString()
], ScoreAddressDto.prototype, "delegacionMunicipio", void 0);
export class ScoreHitDto {
    valor = "";
}
__decorate([
    IsString()
], ScoreHitDto.prototype, "valor", void 0);
export class ScoreNoHitDto {
    date = "";
    score = "";
    message = "";
    evaluation = "";
}
__decorate([
    IsString()
], ScoreNoHitDto.prototype, "date", void 0);
__decorate([
    IsString()
], ScoreNoHitDto.prototype, "score", void 0);
__decorate([
    IsString()
], ScoreNoHitDto.prototype, "message", void 0);
__decorate([
    IsString()
], ScoreNoHitDto.prototype, "evaluation", void 0);
export class ScoreGeneralDto {
    nombres = "";
    apellidoMaterno = "";
    apellidoPaterno = "";
    fechaNacimiento = "";
}
__decorate([
    IsString()
], ScoreGeneralDto.prototype, "nombres", void 0);
__decorate([
    IsString()
], ScoreGeneralDto.prototype, "apellidoMaterno", void 0);
__decorate([
    IsString()
], ScoreGeneralDto.prototype, "apellidoPaterno", void 0);
__decorate([
    IsString()
], ScoreGeneralDto.prototype, "fechaNacimiento", void 0);
export class ScoreDto {
    domicilio = new ScoreAddressDto();
    scoreNoHit = new ScoreHitDto();
    folioConsulta = "";
    datosGenerales = new ScoreGeneralDto();
}
__decorate([
    ValidateNested(),
    Type(() => ScoreAddressDto)
], ScoreDto.prototype, "domicilio", void 0);
__decorate([
    ValidateNested(),
    Type(() => ScoreHitDto)
], ScoreDto.prototype, "scoreNoHit", void 0);
__decorate([
    IsString()
], ScoreDto.prototype, "folioConsulta", void 0);
__decorate([
    ValidateNested(),
    Type(() => ScoreGeneralDto)
], ScoreDto.prototype, "datosGenerales", void 0);
