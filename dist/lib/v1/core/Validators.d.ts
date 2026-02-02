import { ValidatorConstraintInterface } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments.js';
export declare class IsStringOrNumber implements ValidatorConstraintInterface {
    validate(value: any): value is string | number | bigint;
    defaultMessage(e: ValidationArguments): string;
}
export declare class IsStringOrBoolean implements ValidatorConstraintInterface {
    validate(value: any): value is string | boolean;
    defaultMessage?(e: ValidationArguments): string;
}
