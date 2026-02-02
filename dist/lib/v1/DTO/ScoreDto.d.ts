export declare class ScoreAddressDto {
    CP: string;
    ciudad: string;
    estado: string;
    domicilio: string;
    coloniaPoblacion: string;
    delegacionMunicipio: string;
}
export declare class ScoreHitDto {
    valor: string;
}
export declare class ScoreNoHitDto {
    date: string;
    score: string;
    message: string;
    evaluation: string;
}
export declare class ScoreGeneralDto {
    nombres: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    fechaNacimiento: string;
}
export declare class ScoreDto {
    domicilio: ScoreAddressDto;
    scoreNoHit: ScoreHitDto;
    folioConsulta: string;
    datosGenerales: ScoreGeneralDto;
}
