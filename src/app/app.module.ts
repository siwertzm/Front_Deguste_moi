import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FicheVinComponent } from './fiche-vin/fiche-vin.component';
import { ListeVinComponent } from './liste-vin/liste-vin.component';
import { FicheRecetteComponent } from './fiche-recette/fiche-recette.component';
import { AmisComponent } from './amis/amis.component';
import { OrgaRepasComponent } from './orga-repas/orga-repas.component';
import { FicheAmiComponent } from './fiche-ami/fiche-ami.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { RecettesComponent } from './recettes/recettes.component';
import { MesVinsComponent } from './mes-vins/mes-vins.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    FicheVinComponent,
    ListeVinComponent,
    FicheRecetteComponent,
    AmisComponent,
    OrgaRepasComponent,
    FicheAmiComponent,
    DialogueComponent,
    RecettesComponent,
    MesVinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
