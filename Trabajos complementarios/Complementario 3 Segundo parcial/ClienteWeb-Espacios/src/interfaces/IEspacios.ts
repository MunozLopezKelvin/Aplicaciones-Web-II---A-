export interface IResEspacios {
    total:     number;
    espacios: IEspacios[];
}

export interface IEspacios{
    _id?:    string;
    ESPACIO_ID: number;
    ESPACIO_ESTADO: string;
    ESTABLECIMIENTO_NOMBRE: string;
    Estado?: boolean;
    __v?:    number;
}
