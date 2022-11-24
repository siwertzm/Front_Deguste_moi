import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FicheVinComponent } from './fiche-vin/fiche-vin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeVinComponent } from './liste-vin/liste-vin.component';
import { RecettesComponent } from './recettes/recettes.component';
import { FicheRecetteComponent } from './fiche-recette/fiche-recette.component';
import { AmisComponent } from './amis/amis.component';


const routes: Routes = [
  {component: ConnexionComponent, path: "login"},
  {component: InscriptionComponent, path: "sign"},
  {component: FicheVinComponent, path: "vin"},
  {component: ListeVinComponent, path: "listeVin"},
  {component: RecettesComponent, path: "recettes"},
  {component: FicheRecetteComponent, path: "ficheRecette"},
  {component: AmisComponent, path: "amis"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
