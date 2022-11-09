

export class Contacto{
    _id?: string;
    nombres : string;
    apellidos : string;
    correo : string;
    telefono : number;
    nombreEmp : string;
    sitioEmp : string;
    tipoEmp : string;
    categoriaEmp : string;
    listUser : any;
    mensajeBox : string;
    dateCreation?:any

    constructor(nombres : string, apellidos : string, correo : string, telefono : number, nombreEmp : string, sitioEmp : string, tipoEmp : string, categoriaEmp : string, listUser : any, mensajeBox : string, dateCreation?:any){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreEmp = nombreEmp;
        this.sitioEmp = sitioEmp;
        this.tipoEmp = tipoEmp;
        this.categoriaEmp = categoriaEmp;
        this.listUser = listUser;
        this.mensajeBox = mensajeBox;
        this.dateCreation = dateCreation
    }



}
