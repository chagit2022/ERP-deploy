import { Component, OnInit } from '@angular/core';
import { PacienteService } from "src/app/services/paciente.service";
import { Paciente } from 'src/app/models/paciente';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {

  listarPaciente: Paciente[]=[];
  listaSintomasPaciente: any = [];

  constructor(private servicioPaciente: PacienteService) { }

  ngOnInit(): void {
    this.obtenerPacientes()
  }
  obtenerPacientes(){
    this.servicioPaciente.getPacientes().subscribe((data)=>{
      console.log(data)
      this.listarPaciente = data
      // for (const datico of data) {
      //   for (const datico2 of datico.sintomas) {
      //     this.listaSintomasPaciente.push(datico2.item_text)
      //   }
      // }
    },(error) =>{
      console.log(error);       
    })
  }
  eliminarPaciente(id:any){
    Swal.fire({
      title: 'Esta seguro de eliminar?',
      text: "Recuerde que no se puede devolver",
      icon: 'warning',
      iconColor:'#ff8500',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioPaciente.deletePacientes(id).subscribe((data)=>{
          this.obtenerPacientes()
          Swal.fire({
            title: 'Dato eliminado corractamente',
            icon: 'success',
            iconColor:'#84b500',
          })
        },(error) =>{
          console.log(error);       
        })        
      }
    })
  }
}
