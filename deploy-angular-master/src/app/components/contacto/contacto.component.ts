import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// recuperation des services de contacto.service qui se communique aussi avec Correos.ts
import { ContactoService } from 'src/app/services/contacto.service';
// recuperation des modeles de contacto
import { Contacto } from '../../models/contactoModel';
// modul sweetalert2 pour les alertes de style
import Swal from 'sweetalert2';

// CommonJS
// const Swal = require('sweetalert2')

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    contactoForm: FormGroup; // format de "FormGroup" de contacto

    // tous Mes patterns des inputs
    regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    regexTelefono = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
    regexWeb = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌​a-z]{3}\.([a-z]+)?$/


    //structure pour donner des ordres ou actions desirées... exple: je veux que le "Nombres" soit obligatoirement rempli avec "Validators.required", si il n'y a que [''] cela veut dire que le choix est libre, et "pattern" est la pour faire respecter un regex precis.
    constructor(private fb: FormBuilder, private servicioContacto: ContactoService) {

        this.contactoForm = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexTelefono)]],
            nombreEmp: ['', Validators.required],
            sitioEmp: ['', [Validators.required, Validators.pattern(this.regexWeb)]],
            tipoEmp: ['', Validators.required],
            categoriaEmp: ['', Validators.required],
            softErpBox: [''],
            gestPersoBox: [''],
            gestAusBox: [''],
            ProceRhBox: [''],
            ventajasBox: [''],
            otroBox: [''],
            mensajeBox: ['', Validators.required]
        });


    }

    ngOnInit(): void {
    }

    arrayUser: any = [] //array vide pour recevoir les checkbox selectionnées

    // if (document.form.elementArr.required.value != ""){
    // }else{
    //     console.log(mandarMensaje())
    // }

    mandarMensaje() {
        // array de la base de données des checkbox; la clé est le nom du formControlName ds ce cas mais pourrait etre different si je ne m'abuse, et egal: la valeur qui la retransmettra à la liste élue.
        const DataCheckBox = [
            { name: "softErpBox", egal: "software de E.R.P. de recurso humano" },
            { name: "gestPersoBox", egal: "Gestion administrativa" },
            { name: "gestAusBox", egal: "Gestion de Ausencias" },
            { name: "ProceRhBox", egal: "Automatizacion de proceso" },
            { name: "ventajasBox", egal: "Ventajas y remuneraciones" },
            { name: "otroBox", egal: "Otro" },
        ]
        // pour chaque element (elementoArr)ds (DataCheckBox) si tu vas dans  contactoForm recupere moi : name de elementoArr ds DataCheckBox, et si la valeur de l'input est true, vas me chercher arrayUser et mets lui la valeur egal de elementoArr.
        // para cada elemnto "elementoArr dentor datacheckbox, si vas en contactoForm recuperame" name de elementoArr dentro DataCheckBox, y si el valor del input es true, vaya a buscarme arrayUser, y pongalo el valor egal(valor de la key) de elementoArr
        for (const elementoArr of DataCheckBox) {
            if (this.contactoForm.get(elementoArr.name)?.value == true) {
                this.arrayUser.push(elementoArr.egal)

            }
        }
        // en ce qui concerne le "model", exple :  pour que "nombres" soit  appelé tu vas le chercher la valeur de "nombres" ds le formulaire contacto
        // es del modelo, ejemplo: pra que "nombres sea llamado, debes buscar el valor de nombres en el ormulario"
        const CONTACTO: Contacto = {
            nombres: this.contactoForm.get('nombres')?.value,
            apellidos: this.contactoForm.get('apellidos')?.value,
            correo: this.contactoForm.get('correo')?.value,
            telefono: this.contactoForm.get('telefono')?.value,
            nombreEmp: this.contactoForm.get('nombreEmp')?.value,
            sitioEmp: this.contactoForm.get('sitioEmp')?.value,
            tipoEmp: this.contactoForm.get('tipoEmp')?.value,
            categoriaEmp: this.contactoForm.get('categoriaEmp')?.value,
            listUser: this.arrayUser,
            mensajeBox: this.contactoForm.get('mensajeBox')?.value
        }
        console.log(CONTACTO);
        this.servicioContacto.postContacto(CONTACTO).subscribe(() => {
            //modal avec animation d'entrée depuis le centre avec rebond et sortie par le haut - modal con animacion de entrada desde el centro con salto y salida por arriba
            Swal.fire({
                width: 400,
                position: 'center',
                icon: 'success',
                imageUrl: 'assets/img/mail_2.gif',
                imageWidth: 200,
                imageHeight: 180,
                imageAlt: 'Custom image',
                title: 'Mensaje enviado correctamente...',
                showClass: {
                    popup: 'animate__animated animate__zoomInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutUp'
                },
                showConfirmButton: false,
                timer: 2000
            })



        }, (error) => {
            console.log(error)
        }) //callback pour les erreurs/para los errores
    }

}
