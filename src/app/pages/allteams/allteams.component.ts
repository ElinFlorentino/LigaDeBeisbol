import { Component, OnInit } from '@angular/core';
import listaJugadores from 'src/assets/Json/equipos.json';
@Component({
  selector: 'app-allteams',
  templateUrl: './allteams.component.html',
  styleUrls: ['./allteams.component.css'],
})
export class AllteamsComponent implements OnInit {
  jugadores: any = listaJugadores;
  equipo: any = [];
  equipo1: any = [];
  equipo2: any = [];
  equipo3: any = [];
  equipo4: any = [];
  equipo5: any = [];
  equipo6: any = [];
  resultado: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.equipo1 = this.selecEquipo('Perros Falderos');
    // alert(this.equipo1.length);
    this.equipo2 = this.selecEquipo('Gallos Guerreros');
    this.equipo3 = this.selecEquipo('Ciguas del Sur');
    this.equipo4 = this.selecEquipo('Gatos Feroces');
    this.equipo5 = this.selecEquipo('Carpinteros de Acero');
    this.equipo6 = this.selecEquipo('Rolones del norte');
  }

  selecEquipo(equipoNombre: string) {
    this.equipo = [];
    for (let k = 0; k < this.jugadores.length; k++) {
      if (this.jugadores[k].equipo == equipoNombre) {
        this.equipo.push(this.jugadores[k]);
      }
    }
    return this.equipo;
  }
  calcularPromedio() {
    const ganados = document.getElementsByTagName('input')[0];
    const perdidos = document.getElementsByTagName('input')[1];
    let p = document.getElementById('promedio');

    var g = +ganados?.value;
    var pe = +perdidos?.value;

    this.resultado = (g + pe) / 2;
    p?.setAttribute('class', '');
  }
}
