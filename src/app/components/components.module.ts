import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccionesComponent } from './acciones/acciones.component';

@NgModule({
  declarations: [AccionesComponent],
  imports: [CommonModule],
  exports: [AccionesComponent],
})
export class ComponentsModule {}
