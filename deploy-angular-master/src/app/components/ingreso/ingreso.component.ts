import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css']

})
export class IngresoComponent implements OnInit {

    loginForm: FormGroup

    constructor(private fb: FormBuilder, private router:Router) {
        this.loginForm = this.fb.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    ngOnInit(): void {
        sessionStorage.setItem("correo", "admin1")
        sessionStorage.setItem("clave", "pepe123")
        sessionStorage.setItem("correo2", "admin2")
        sessionStorage.setItem("clave2", "pepe321")
    }
    validarLogin() {
        let usuario_formulario = this.loginForm.get('usuario')?.value
        let clave_usuario = this.loginForm.get('password')?.value
        if (usuario_formulario == sessionStorage.getItem("correo") && clave_usuario == sessionStorage.getItem("clave") ) {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido al grupo',
            })
            //aparezca el dashboard
            this.router.navigate(['/dashboard'])
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Formulario Invalido',
                })
            }
            if (usuario_formulario == sessionStorage.getItem("correo2") && clave_usuario == sessionStorage.getItem("clave2")) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido!',
                })
                //aparezca el dashboard
                this.router.navigate(['/correos'])
            }
    }
}