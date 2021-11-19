import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    PersonajesComponent,
    CapitulosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
