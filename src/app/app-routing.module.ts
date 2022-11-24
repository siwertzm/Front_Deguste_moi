import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FicheVinComponent } from './fiche-vin/fiche-vin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeVinComponent } from './liste-vin/liste-vin.component';
import { FicheRecetteComponent } from './fiche-recette/fiche-recette.component';
import { OrgaRepasComponent } from './orga-repas/orga-repas.component';
import {AmisComponent } from './amis/amis.component';
import {FicheAmiComponent } from './fiche-ami/fiche-ami.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { RecettesComponent } from './recettes/recettes.component';
import { MesVinsComponent } from './mes-vins/mes-vins.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { MesInvitationsComponent } from './mes-invitations/mes-invitations.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {component: ConnexionComponent, path: "login"},
  {component: InscriptionComponent, path: "sign"},
  {component: FicheVinComponent, path: "vin"},
  {component: ListeVinComponent, path: "listeVin"},
  {component: FicheRecetteComponent, path: "ficheRecette"},
  {component: AmisComponent, path: "amis"},
  {component: OrgaRepasComponent, path: "OrgaRepas"},
  {component: FicheAmiComponent, path: "ficheAmi"},
  {component : DialogueComponent, path: "dial"},
  {component: RecettesComponent, path: "recettes"},
  {component : MesVinsComponent, path: "mesvins"},
  {component : CalendrierComponent, path : "calendrier"},
  {component : MesInvitationsComponent, path :"mesInvits"},
  {component : ProfileComponent, path :"profil"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
