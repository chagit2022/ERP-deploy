export class Doctores {
    _id?: string;
    nombre: string;
    apellido: string;
    tipoIdentificacion: string;
    numeroIdentificacion: Number;
    fecha: string;
    correo: string;
    telefono: number;
    area: string;

    constructor(nombre: string, apellido: string, tipoIdentificacion: string, numeroIdentificacion: Number, fecha: string, correo: string, area: string, telefono: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoIdentificacion = tipoIdentificacion; 
        this.numeroIdentificacion = numeroIdentificacion;
        this.fecha = fecha;
        this.correo = correo;
        this.area = area;
        this.telefono = telefono;
    }

}