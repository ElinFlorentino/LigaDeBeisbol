import listaJugadores from 'src/assets/Json/equipos.json';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LigaDeBeisbol';
  jugadores: any = listaJugadores;

}
