import {PartialType} from '@nestjs/mapped-types';
import {UserCreateDto} from './UserCreateDto.js';

export class UserUpdateDto extends PartialType(UserCreateDto) {
}
