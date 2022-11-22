import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FicheVinComponent } from './fiche-vin/fiche-vin.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {component: ConnexionComponent, path: "login"},
  {component: InscriptionComponent, path: "sign"},
  {component: FicheVinComponent, path: "vins"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
