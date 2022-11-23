import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FicheVinComponent } from './fiche-vin/fiche-vin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeVinComponent } from './liste-vin/liste-vin.component';

const routes: Routes = [
  {component: ConnexionComponent, path: "login"},
  {component: InscriptionComponent, path: "sign"},
  {component: FicheVinComponent, path: "vin"},
  {component: ListeVinComponent, path: "listeVin"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
