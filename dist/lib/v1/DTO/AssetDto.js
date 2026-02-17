var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsArray, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ScoreNoHitDto } from "./ScoreDto.js";
import { CatalogDto } from "./CatalogDto.js";
import { eAssetPeriod } from "ravcredit-core";
export class AssetCategoryDto {
    name = "";
    id = "";
    createAt = 0;
}
__decorate([
    IsString()
], AssetCategoryDto.prototype, "name", void 0);
__decorate([
    IsString()
], AssetCategoryDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], AssetCategoryDto.prototype, "createAt", void 0);
export class AssetBrandDto {
    name = "";
    id = "";
    description = "";
}
__decorate([
    IsString()
], AssetBrandDto.prototype, "name", void 0);
__decorate([
    IsString()
], AssetBrandDto.prototype, "id", void 0);
__decorate([
    IsString()
], AssetBrandDto.prototype, "description", void 0);
export class AssetOfferDto {
    name = "";
    id = "";
    createAt = 0;
    description = "";
}
__decorate([
    IsString()
], AssetOfferDto.prototype, "name", void 0);
__decorate([
    IsString()
], AssetOfferDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], AssetOfferDto.prototype, "createAt", void 0);
__decorate([
    IsString()
], AssetOfferDto.prototype, "description", void 0);
export class PaymentOptionDto {
    deadline = 0;
    score = new ScoreNoHitDto();
    period = eAssetPeriod.MONTH;
}
__decorate([
    IsNumber()
], PaymentOptionDto.prototype, "deadline", void 0);
__decorate([
    ValidateNested(),
    Type(() => ScoreNoHitDto)
], PaymentOptionDto.prototype, "score", void 0);
__decorate([
    IsEnum(eAssetPeriod)
], PaymentOptionDto.prototype, "period", void 0);
//TODO: Add pending data, those params will comes from "Circulo de credito" API
export class ScoreReferenceDto {
    name = "";
    score = 0;
}
__decorate([
    IsString()
], ScoreReferenceDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], ScoreReferenceDto.prototype, "score", void 0);
export class oAssetDto {
    name = "";
    id = "";
    createAt = 0;
    category = new AssetCategoryDto();
    brand = new AssetBrandDto();
    price = 0;
    model = "";
    imageUrl = [];
    paymentOption = [];
    catalog = new CatalogDto();
    offers = [];
    score = new ScoreReferenceDto();
    IMEI = "";
}
__decorate([
    IsString()
], oAssetDto.prototype, "name", void 0);
__decorate([
    IsString()
], oAssetDto.prototype, "id", void 0);
__decorate([
    IsNumber()
], oAssetDto.prototype, "createAt", void 0);
__decorate([
    ValidateNested(),
    Type(() => AssetCategoryDto)
], oAssetDto.prototype, "category", void 0);
__decorate([
    ValidateNested(),
    Type(() => AssetBrandDto)
], oAssetDto.prototype, "brand", void 0);
__decorate([
    IsNumber()
], oAssetDto.prototype, "price", void 0);
__decorate([
    IsString()
], oAssetDto.prototype, "model", void 0);
__decorate([
    IsArray(),
    IsString({ each: true })
], oAssetDto.prototype, "imageUrl", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PaymentOptionDto)
], oAssetDto.prototype, "paymentOption", void 0);
__decorate([
    ValidateNested(),
    Type(() => CatalogDto)
], oAssetDto.prototype, "catalog", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => AssetOfferDto)
], oAssetDto.prototype, "offers", void 0);
__decorate([
    ValidateNested(),
    Type(() => ScoreReferenceDto)
], oAssetDto.prototype, "score", void 0);
__decorate([
    IsString()
], oAssetDto.prototype, "IMEI", void 0);
export class oAssetFeaturesDto {
    categories = [];
    brands = [];
    paymentOptions = [];
    catalogs = [];
    offers = [];
    scores = [];
}
__decorate([
    IsArray(),
    ValidateNested(),
    Type(() => AssetCategoryDto)
], oAssetFeaturesDto.prototype, "categories", void 0);
__decorate([
    IsArray(),
    ValidateNested(),
    Type(() => AssetBrandDto)
], oAssetFeaturesDto.prototype, "brands", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PaymentOptionDto)
], oAssetFeaturesDto.prototype, "paymentOptions", void 0);
__decorate([
    IsArray(),
    ValidateNested(),
    Type(() => CatalogDto)
], oAssetFeaturesDto.prototype, "catalogs", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => AssetOfferDto)
], oAssetFeaturesDto.prototype, "offers", void 0);
__decorate([
    IsArray(),
    ValidateNested(),
    Type(() => ScoreReferenceDto)
], oAssetFeaturesDto.prototype, "scores", void 0);
