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
import { ProfileComponent } from './profile/profile.component';
import { AmisComponent } from './amis/amis.component';
import { OrgaRepasComponent } from './orga-repas/orga-repas.component';
import { FicheAmiComponent } from './fiche-ami/fiche-ami.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { RecettesComponent } from './recettes/recettes.component';
import { MesVinsComponent } from './mes-vins/mes-vins.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { MesInvitationsComponent } from './mes-invitations/mes-invitations.component';
import { MesEvenementsComponent } from './mes-evenements/mes-evenements.component';
import { RecettesFavsComponent } from './recettes-favs/recettes-favs.component';
import { VinsFavsComponent } from './vins-favs/vins-favs.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HomeComponent } from './home/home.component';
import { VinRegionComponent } from './vin-region/vin-region.component';
import { RecetteRegionComponent } from './recette-region/recette-region.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    FicheVinComponent,
    ListeVinComponent,
    FicheRecetteComponent,
    ProfileComponent,
    AmisComponent,
    OrgaRepasComponent,
    FicheAmiComponent,
    DialogueComponent,
    RecettesComponent,
    MesVinsComponent,
    CalendrierComponent,
    MesInvitationsComponent,
    MesEvenementsComponent,
    RecettesFavsComponent,
    VinsFavsComponent,
    ListeCoursesComponent,
    HomeComponent,
    VinRegionComponent,
    RecetteRegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
