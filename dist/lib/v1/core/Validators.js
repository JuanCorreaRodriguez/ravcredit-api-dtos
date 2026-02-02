var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ValidatorConstraint } from 'class-validator';
let IsStringOrNumber = class IsStringOrNumber {
    validate(value) {
        return typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint';
    }
    defaultMessage(e) {
        throw new Error(`(${e.property}) must be a string or number.`);
    }
};
IsStringOrNumber = __decorate([
    ValidatorConstraint({ name: 'IsStringOrNumber', async: false })
], IsStringOrNumber);
export { IsStringOrNumber };
let IsStringOrBoolean = class IsStringOrBoolean {
    validate(value) {
        return typeof value === 'boolean' || typeof value === 'string';
    }
    defaultMessage(e) {
        throw new Error(`(${e.property}) must be a string or boolean.`);
    }
};
IsStringOrBoolean = __decorate([
    ValidatorConstraint({ name: 'IsStringOrBoolean', async: false })
], IsStringOrBoolean);
export { IsStringOrBoolean };
