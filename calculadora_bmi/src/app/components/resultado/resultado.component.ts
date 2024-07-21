import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi);
  }

  ngOnInit(): void {   //Aqui se llaman a los métodos que deben inicializarse al cargar la página. 
    this.getResultado();
  }
  getResultado() {

    if (this.bmi >= 35) {
      this.resultado = 'Traigan la grúa pal watón ql';
      this.interpretacion = 'Si nadas, eres probablemente un cachalote...';
    } else if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso.';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio.';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Peso normal.';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
    } else {
      this.resultado = 'Bajo peso.';
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Debes comer un poco más. '
    }
  };
}
