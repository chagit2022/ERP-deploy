import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    customOptions: OwlOptions = {
        loop:false,
        margin:0,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:2,
            },
            1000:{
                items:3,
                loop:false
            }
        }
    }
}

