import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RecettesComponent } from './recettes/recettes.component';


const routes: Routes = [
  {component: ConnexionComponent, path: "login"},
  {component: InscriptionComponent, path: "sign"},
  {component: RecettesComponent, path:"recettes"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
