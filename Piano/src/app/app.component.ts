import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  sonido(numero: number): void {   // PREGUNTAR POR VOID
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  };
}
