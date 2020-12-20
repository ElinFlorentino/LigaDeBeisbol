import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AllteamsComponent } from './pages/allteams/allteams.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'equipos', component: AllteamsComponent },
  { path: 'equipos/Perros Falderos', component: EquiposComponent },
  { path: 'equipos/Gallos Guerreros', component: EquiposComponent },
  { path: 'equipos/Ciguas del Sur', component: EquiposComponent },
  { path: 'equipos/Gatos Feroces', component: EquiposComponent },
  { path: 'equipos/Carpinteros de Acero', component: EquiposComponent },
  { path: 'equipos/Rolones del norte', component: EquiposComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
