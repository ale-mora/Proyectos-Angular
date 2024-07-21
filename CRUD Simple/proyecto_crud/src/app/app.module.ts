
// Módulo raíz que declara la aplicación y sus dependencias.
// Es el módulo raíz de tu aplicación Angular. Define el módulo 
// principal que Angular utiliza para arrancar la aplicación. 
// Aquí se declaran todos los componentes y servicios que son 
// parte del módulo raíz, y se importan otros módulos necesarios.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';


// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [   //Componentes (módulos) a utilizar
    AppComponent,
    NavbarComponent,
    ListusersComponent,
    AddEditUserComponent,
    ProgressBarComponent
  ],

  imports: [
    BrowserModule,    // módulos de módulos
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
