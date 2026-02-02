import { BusinessDeadlineDto } from "./BusinessDeadlineDto.js";
export declare class BusinessConfigDto {
    deadlines: BusinessDeadlineDto[];
    downloadsClient: boolean;
    passportPaymentReference: boolean;
    dynamicPaymentReference: boolean;
    conektaPaymentReference: boolean;
    conektaPaymentLink: boolean;
    mobileVersion: string;
    adminVersion: string;
    mobileVersionPrev: string;
    apkUrl: string;
    version: string;
    apiVersion: string;
}
