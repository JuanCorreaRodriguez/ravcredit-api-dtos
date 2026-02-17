import {IsArray, IsEnum, IsNumber, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ScoreNoHitDto} from "./ScoreDto.js";
import {CatalogDto} from "./CatalogDto.js";
import {eAssetPeriod} from "ravcredit-core";

export class AssetCategoryDto {
    @IsString()
    name: string = "";

    @IsString()
    id: string = "";

    @IsNumber()
    createAt: number = 0;
}

export class AssetBrandDto {
    @IsString()
    name: string = "";

    @IsString()
    id: string = "";

    @IsString()
    description: string = "";
}

export class AssetOfferDto {
    @IsString()
    name: string = "";

    @IsString()
    id: string = "";

    @IsNumber()
    createAt: number = 0;

    @IsString()
    description: string = "";
}

export class PaymentOptionDto {
    @IsNumber()
    deadline: number = 0;

    @ValidateNested()
    @Type(() => ScoreNoHitDto)
    score: ScoreNoHitDto = new ScoreNoHitDto();

    @IsEnum(eAssetPeriod)
    period: eAssetPeriod = eAssetPeriod.MONTH;
}

//TODO: Add pending data, those params will comes from "Circulo de credito" API
export class ScoreReferenceDto {
    @IsString()
    name: string = ""

    @IsNumber()
    score: number = 0
}

export class oAssetDto {
    @IsString()
    name: string = "";

    @IsString()
    id: string = "";

    @IsNumber()
    createAt: number = 0;

    @ValidateNested()
    @Type(() => AssetCategoryDto)
    category: AssetCategoryDto = new AssetCategoryDto();

    @ValidateNested()
    @Type(() => AssetBrandDto)
    brand: AssetBrandDto = new AssetBrandDto();

    @IsNumber()
    price: number = 0;

    @IsString()
    model: string = "";

    @IsArray()
    @IsString({each: true})
    imageUrl: string[] = [];

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => PaymentOptionDto)
    paymentOption: PaymentOptionDto[] = [];

    @ValidateNested()
    @Type(() => CatalogDto)
    catalog: CatalogDto = new CatalogDto();

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => AssetOfferDto)
    offers: AssetOfferDto[] = [];

    @ValidateNested()
    @Type(() => ScoreReferenceDto)
    score: ScoreReferenceDto = new ScoreReferenceDto();

    @IsString()
    IMEI: string = "";
}

export class oAssetFeaturesDto {
    @IsArray()
    @ValidateNested()
    @Type(() => AssetCategoryDto)
    categories: AssetCategoryDto[] = [];

    @IsArray()
    @ValidateNested()
    @Type(() => AssetBrandDto)
    brands: AssetBrandDto[] = [];

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => PaymentOptionDto)
    paymentOptions: PaymentOptionDto[] = [];

    @IsArray()
    @ValidateNested()
    @Type(() => CatalogDto)
    catalogs: CatalogDto[] = [];

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => AssetOfferDto)
    offers: AssetOfferDto[] = [];

    @IsArray()
    @ValidateNested()
    @Type(() => ScoreReferenceDto)
    scores: ScoreReferenceDto[] = [];
}