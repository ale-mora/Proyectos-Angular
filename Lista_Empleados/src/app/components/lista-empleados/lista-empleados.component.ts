import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  listaEmpleados: Empleado[] = [  
    {numero:1, nombre: 'Doña', apellido: 'Pollo 1', sexo: 'femenino', salario: 10000000000 },
    {numero:2, nombre: 'Don', apellido: 'Pollo 2', sexo: 'masculino', salario: 10000000000 },
    {numero:3, nombre: 'Don', apellido: 'Pollo 3', sexo: 'masculino', salario: 10000000000 },
    {numero:4, nombre: 'Doña', apellido: 'Pollo 4', sexo: 'femenino', salario: 10000000000 },
    {numero:5, nombre: 'Doña', apellido: 'Pollo 5', sexo: 'femenino', salario: 10000000000 },
    {numero:6, nombre: 'Doña', apellido: 'Pollo 6', sexo: 'femenino', salario: 10000000000 },
    {numero:7, nombre: 'Doña', apellido: 'Pollo 7', sexo: 'femenino', salario: 10000000000 },
    {numero:8, nombre: 'Doña', apellido: 'Pollo 8', sexo: 'femenino', salario: 10000000000 },
    {numero:9, nombre: 'Don', apellido: 'Pollo 9', sexo: 'masculino', salario: 10000000000 },
    {numero:10, nombre: 'Don', apellido: 'Pollo 10', sexo: 'masculino', salario: 10000000000 },
  ];  // explicar por qué esto no debería estar vacío?

  seleccion = 'todos-as';

  constructor() { }

  ngOnInit(): void {
  }
  obtenerTotalEmpleados(): number {
    return this.listaEmpleados.length;
  };
  obtenerTotalFemeninos(): number{
    return this.listaEmpleados.filter(list => list.sexo === 'femenino').length;
  };
  obtenerTotalMaculino(): number{
    return this.listaEmpleados.filter(list => list.sexo === 'masculino').length;
  };
}
