import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ComponentsModule } from '../components/components.module';
import { EquiposComponent } from './equipos/equipos.component';
import { AllteamsComponent } from './allteams/allteams.component';

@NgModule({
  declarations: [InicioComponent, NosotrosComponent, JugadoresComponent, EquiposComponent, AllteamsComponent],
  imports: [CommonModule,ComponentsModule],
  exports: [InicioComponent, NosotrosComponent, JugadoresComponent,EquiposComponent,AllteamsComponent],
})
export class PagesModule {}
