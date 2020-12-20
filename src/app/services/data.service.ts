import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  equipo: any = [];
  equipoNombre: string ="equipo"
  constructor() {}
}
