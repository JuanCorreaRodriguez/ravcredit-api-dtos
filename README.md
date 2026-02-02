# ravcredit-api-dtos

Shared **TypeScript DTO library** for backend development.  
This package provides a consistent set of **base DTO objects** used for **validation, verification, and standardization
** across services (commonly in **NestJS** apps using `class-validator` / `class-transformer`).

## Why this exists

- **Standardization**: one canonical source for request/response shapes (DTOs)
- **Validation**: DTO decorators ensure consistent runtime validation rules
- **Reusability**: share DTOs across multiple backend services and avoid duplication
- **Cleaner services**: keep controllers/services focused on business logic

## What’s included

- A collection of versioned DTOs (e.g., `src/lib/v1/...`) representing common entities and payloads
- Utilities and shared structures used across backend modules
- Type definitions generated on build and exported via the package entrypoint

## Tech stack

- TypeScript (ESM module package)
- `class-validator` and `class-transformer` for validation & transformation
- Designed to be used alongside NestJS DTO patterns

## Installation
