import {ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {ValidationArguments} from 'class-validator/types/validation/ValidationArguments.js';

@ValidatorConstraint({name: 'IsStringOrNumber', async: false})
export class IsStringOrNumber implements ValidatorConstraintInterface {
    validate(value: any) {
        return typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint';
    }

    defaultMessage(e: ValidationArguments): string {
        throw new Error(`(${e.property}) must be a string or number.`);
    }
}

@ValidatorConstraint({name: 'IsStringOrBoolean', async: false})
export class IsStringOrBoolean implements ValidatorConstraintInterface {
    validate(value: any) {
        return typeof value === 'boolean' || typeof value === 'string';
    }

    defaultMessage?(e: ValidationArguments): string {
        throw new Error(`(${e.property}) must be a string or boolean.`);
    }
}
