import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CorreosComponent } from './components/correos/correos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListarDoctoresComponent } from './components/listar-doctores/listar-doctores.component';
import { RegistrarDoctoresComponent } from './components/registrar-doctores/registrar-doctores.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    IngresoComponent,
    ContactoComponent,
    CorreosComponent,
    DashboardComponent,
    RegistrarDoctoresComponent,
    ListarDoctoresComponent,
    NotFoundComponent,

    ListarPacienteComponent,
    RegistrarPacienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
