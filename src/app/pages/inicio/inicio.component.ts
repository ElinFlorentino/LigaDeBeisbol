import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  jugadores: any = [];
  jugadorNombre: string = 'vacio';
  equipoNombre: string = 'vacio';
  boton: string = 'Buscar';
  constructor() {}

  ngOnInit(): void {}

  buscarJugador() {
    const input = document.querySelector('input');
    const busqueda = document.getElementById('busqueda');
    const noEncontrado = document.getElementById('sinresultado');
    const btn = document.getElementById('button');

    let nombre = input?.value.toLowerCase();
    noEncontrado?.setAttribute('class', 'busqueda ');
    if (input?.value == '') {
      alert('el campo nombe no puede estar vacio..');
      return;
    }

    for (let k = 0; k < this.jugadores.length; k++) {
      let jn = this.jugadores[k].nombre.toLowerCase();
      if (jn == nombre) {
        this.jugadorNombre = this.jugadores[k].nombre;
        this.equipoNombre = this.jugadores[k].equipo;
        busqueda?.setAttribute('class', ' ');
        break;
      }
      if (k == this.jugadores.length - 1) {
        noEncontrado?.setAttribute('class', ' ');
      }
    }
    //alert(noEncontrado?.textContent);
  }
}
