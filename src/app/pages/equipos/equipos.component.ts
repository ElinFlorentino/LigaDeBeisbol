import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  equipo: any = [];
  equipoNombre: string ="vacio";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.equipo = this.dataService.equipo;
    this.equipoNombre = this.dataService.equipoNombre;
  }

}
