import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitulosComponent } from './dashboard/pages/capitulos/capitulos.component';
import { PersonajesComponent } from './dashboard/pages/personajes/personajes.component';

const routes: Routes = [
    {
      path: 'capitulos',
      component: CapitulosComponent
    },
    {
      path: 'personajes',
      component: PersonajesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
