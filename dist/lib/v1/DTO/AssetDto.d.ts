import { ScoreNoHitDto } from "./ScoreDto.js";
import { CatalogDto } from "./CatalogDto.js";
import { eAssetPeriod } from "ravcredit-core";
export declare class AssetCategoryDto {
    name: string;
    id: string;
    createAt: number;
}
export declare class AssetBrandDto {
    name: string;
    id: string;
    description: string;
}
export declare class AssetOfferDto {
    name: string;
    id: string;
    createAt: number;
    description: string;
}
export declare class PaymentOptionDto {
    deadline: number;
    score: ScoreNoHitDto;
    period: eAssetPeriod;
}
export declare class ScoreReferenceDto {
    name: string;
    score: number;
}
export declare class oAssetDto {
    name: string;
    id: string;
    createAt: number;
    category: AssetCategoryDto;
    brand: AssetBrandDto;
    price: number;
    model: string;
    imageUrl: string[];
    paymentOption: PaymentOptionDto[];
    catalog: CatalogDto;
    offers: AssetOfferDto[];
    score: ScoreReferenceDto;
    IMEI: string;
}
export declare class oAssetFeaturesDto {
    categories: AssetCategoryDto[];
    brands: AssetBrandDto[];
    paymentOptions: PaymentOptionDto[];
    catalogs: CatalogDto[];
    offers: AssetOfferDto[];
    scores: ScoreReferenceDto[];
}
