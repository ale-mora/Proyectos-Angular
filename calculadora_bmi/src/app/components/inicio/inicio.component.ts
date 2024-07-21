import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
    console.log(this.sexo)
  };

  femenino() {
    this.sexo = 'Femenino'
    console.log(this.sexo)
  };

  calcularBMI() {
    const BMI = this.peso / (this.altura / 100) ** 2;
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  };
}
