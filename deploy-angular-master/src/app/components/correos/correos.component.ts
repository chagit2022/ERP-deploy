import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contactoModel';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-correos',
    templateUrl: './correos.component.html',
    styleUrls: ['./correos.component.css']
})


export class CorreosComponent implements OnInit {

    // variable qui s'appuie sur l'import contactoModelo et qui mettra tout dans un array
    listarCorreos: Contacto[] = [];

    constructor(private servicioContacto: ContactoService) { }

    ngOnInit(): void {
        this.obtenerContactos()

    }

    obtenerContactos() {
        this.servicioContacto.getContacto().subscribe((data) => {
            console.log(data)
            this.listarCorreos = data
        }, (error) => {
            console.log(error);
        })
    }

    deleteContacto(id:any){
        Swal.fire({
            title: "Desea borrar el correo?",
            text:"Con cuidado porque el proceso es irreversible",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Si borrarlo'
        }).then ((result)=>{
            if(result.isConfirmed){
                this.servicioContacto.deleteContacto(id).subscribe((data) => {
                    this.obtenerContactos()
                    Swal.fire({
                        title: "Correo eliminado correctamente",
                        icon:"success",
                    }



                    )
                }, (error) => {
                    console.log(error);
                })

            }
        })
    }

}