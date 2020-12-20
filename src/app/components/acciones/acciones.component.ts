import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import listaJugadores from 'src/assets/Json/equipos.json';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css'],
})
export class AccionesComponent implements OnInit {
  jugadores: any = listaJugadores;
  mejores: any = [];
  equipo: any = [];
  @Output() enviarJson = new EventEmitter<any>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.enviarJson.emit(this.jugadores);
  }

  selecEquipo(equipoNombre: string) {
    this.equipo = [];

    for (let k = 0; k < this.jugadores.length; k++) {
      if (this.jugadores[k].equipo == equipoNombre) {
        this.equipo.push(this.jugadores[k]);
      }
    }
    this.dataService.equipo = this.equipo;
    this.dataService.equipoNombre = equipoNombre;
  }
}
