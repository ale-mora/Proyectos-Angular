
// Archivos del componente raíz como TypeScript, HTML y CSS.
// Este archivo contiene la lógica del componente. Los componentes
// son clases que controla una parte de la plantilla html. Bloques 
// de construcción básicos. 

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_crud';
}
