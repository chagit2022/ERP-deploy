import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from "src/app/services/paciente.service";
import { Paciente } from 'src/app/models/paciente';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  pacienteForm: FormGroup;
  regexNomApe = /^[A-Za-z]/;
  regexNum = /^[0-9]+$/;
  titulo_formulario = 'Crear Paciente';
  id:string | null;
  texto_boton = "Crear"

  constructor(private fb: FormBuilder, private servicioPaciente: PacienteService, private idRoute:ActivatedRoute, private router:Router) {
    this.pacienteForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.pattern(this.regexNomApe)]],
      apellido: ['', [Validators.required, Validators.pattern(this.regexNomApe)]],
      documento: ['', Validators.required],
      numDocumento: ['', [Validators.required, Validators.pattern(this.regexNum)]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexNum)]],
      edad: ['', [Validators.required], Validators.pattern(this.regexNum)],
      altura: ['', [Validators.required], Validators.pattern(this.regexNum)],
      
    })
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {

    this.accion()

    this.dropdownList = [
      { item_id: 1, item_text: 'ataque al corazón' },
      { item_id: 2, item_text: 'Quemadura grave' },
      { item_id: 3, item_text: 'Desmayo' },
      { item_id: 4, item_text: 'Dolor de cabeza' },
      { item_id: 5, item_text: 'Herida profunda' },
      { item_id: 6, item_text: 'Dolor' },
      { item_id: 7, item_text: 'Fiebre alta' },
      { item_id: 8, item_text: 'Mareos' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    }
  }
  
  dataPaciente() {
    const PACIENTE: Paciente = {
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      documento: this.pacienteForm.get('documento')?.value,
      numDocumento: this.pacienteForm.get('numDocumento')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      edad: this.pacienteForm.get('edad')?.value,
      altura: this.pacienteForm.get('altura')?.value,
      sintomas: this.pacienteForm.get('sintomas')?.value,      
    }  
    if(this.id == null){      
      console.log(JSON.stringify(PACIENTE))
      this.router.navigate(['/pacientes'])
      this.servicioPaciente.postPaciente(PACIENTE).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Paciente Registrado',
        })
      }, (error) => {
        console.log(error)
      })
    }else{
      this.servicioPaciente.putPaciente(this.id, PACIENTE).subscribe(() => {
        this.router.navigate(['/pacientes'])
        Swal.fire({
          icon: 'success',
          title: 'Paciente Actualizado',
        })
      }, (error) => {
        console.log(error)
      })
    }
  }
  accion(){
    if(this.id != null){
      this.titulo_formulario = 'Actualizar'
      this.texto_boton = 'Crear'
      this.servicioPaciente.getPaciente(this.id).subscribe((data) => {
        this.pacienteForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          documento: data.documento,
          numDocumento: data.numDocumento,
          telefono: data.telefono,
          edad: data.edad,
          altura: data.altura,
          sintomas: data.sintomas
        })
      }, (error) =>{
        console.log(error)
      })
    }
  }

}
