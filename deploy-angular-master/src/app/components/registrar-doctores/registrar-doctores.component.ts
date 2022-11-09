import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctores } from 'src/app/models/dashboardDoctores';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-doctores',
  templateUrl: './registrar-doctores.component.html',
  styleUrls: ['./registrar-doctores.component.css']
})
export class RegistrarDoctoresComponent implements OnInit {

  doctoresForm: FormGroup;
  regexcorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  regexnumero = /^[0-9]/;
  titulo_form = 'Registrar Doctor';
  texto_btn = 'Registar'
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private servicioDoctor: DoctorService, private idRoute: ActivatedRoute) {
    this.doctoresForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]],
      numeroIdentificacion: ['', [Validators.required, Validators.pattern(this.regexnumero)]],
      fecha: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.regexcorreo)]],
      area: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexnumero)]],
    })
    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitada()
  }

  agregarDoctores() {
    const DOCTORES: Doctores = {
      nombre: this.doctoresForm.get('nombre')?.value,
      apellido: this.doctoresForm.get('apellido')?.value,
      tipoIdentificacion: this.doctoresForm.get('tipoIdentificacion')?.value,
      numeroIdentificacion: this.doctoresForm.get('numeroIdentificacion')?.value,
      fecha: this.doctoresForm.get('fecha')?.value,
      correo: this.doctoresForm.get('correo')?.value,
      area: this.doctoresForm.get('area')?.value,
      telefono: this.doctoresForm.get('telefono')?.value,
    }
    console.log(DOCTORES)

    if (this.id == null) {
      this.servicioDoctor.postDoctor(DOCTORES).subscribe(data => {
        this.router.navigate(['listar-doctores'])
        Swal.fire({
          title: 'Exito!',
          text: 'El registro se creo correctamente',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error => {
        console.log(error);
      })
    } else {

      this.servicioDoctor.putDoctor(this.id, DOCTORES).subscribe(data => {
        this.router.navigate(['listar-doctores'])
        Swal.fire({
          title: 'Datos del doctor actualizados!',
          text: 'Se guardaron los cambios de datos del doctor',
          icon: 'success'
        })
      }, error => {
        console.log(error);
      })
    }
  }

  accionSolicitada() {
    if (this.id !== null) {
      this.titulo_form = "Actualizar datos del doctor";
      this.texto_btn = "Actualizar";
      this.servicioDoctor.getDoctor(this.id).subscribe((data) => {
        this.doctoresForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          tipoIdentificacion: data.tipoIdentificacion,
          numeroIdentificacion: data.numeroIdentificacion,
          fecha: data.fecha,
          correo: data.correo,
          area: data.area,
          telefono: data.telefono
        })
      }, (error) => {
        console.log(error)

      })
    }
  }
}
