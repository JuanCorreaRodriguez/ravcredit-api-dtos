import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface.js";

export const Cors: CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false
}
