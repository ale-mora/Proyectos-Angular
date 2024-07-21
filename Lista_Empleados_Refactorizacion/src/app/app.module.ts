import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { NumeroEmpleadosComponent } from './components/lista-empleados/numero-empleados/numero-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    NumeroEmpleadosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
