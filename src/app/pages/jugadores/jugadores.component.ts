import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  jugadores: any = [];
  constructor() {}

  ngOnInit(): void {}
}
