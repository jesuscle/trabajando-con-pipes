import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  informacion: string;
  numeros: Array<number>;
  limite: number = 4;
  fecha: Date;
  numero: number = 234.345;
  constructor() {
    this.informacion = 'Buenos días a TODOS';
    this.numeros = [1,2,3,4, 5, 6];
    this.fecha = new Date();
   }

  ngOnInit(): void {
  }

  cambiarTamano(numero: string): void{
    this.limite = parseInt(numero);
  }

}
