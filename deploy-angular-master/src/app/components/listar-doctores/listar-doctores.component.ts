import { Component, OnInit } from '@angular/core';
import { Doctores } from 'src/app/models/dashboardDoctores';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-doctores',
  templateUrl: './listar-doctores.component.html',
  styleUrls: ['./listar-doctores.component.css']
})
export class ListarDoctoresComponent implements OnInit {

  listarDoctores: Doctores[] = [];

  constructor(private servicioDoctor: DoctorService) { }

  ngOnInit(): void {
    this.obtenerDoctores()
  }

  obtenerDoctores() {
    this.servicioDoctor.getDoctores().subscribe((data) => {
      console.log(data);
      this.listarDoctores = data;
    }, (error) => {
      console.log(error)
    });
  }

  eliminarDoctores(id: any) {
    Swal.fire({
      title: 'Seguro que desea eliminar al Doctor?',
      text: "Esta accion no será reversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioDoctor.deleteDoctor(id).subscribe((data) => {
          this.obtenerDoctores()
          Swal.fire({
            title: 'Doctor eliminado de la base de datos',
            icon: 'success',
            iconColor: '#84b530'
          }
          )
        }, (error) => {
          console.log(error)
        })
      }
    })
  }

}
