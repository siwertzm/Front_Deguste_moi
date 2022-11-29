import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppelationService } from '../appelation.service';
import { AuthService } from '../services/auth/auth.service';
import { RecetteService } from '../services/recette.service';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-fiche-recette',
  templateUrl: './fiche-recette.component.html',
  styleUrls: ['./fiche-recette.component.css']
})
export class FicheRecetteComponent {

  recetteDetail: any;
  recette: any;
  constructor(private http: HttpClient, public recetteService: RecetteService, public service: AuthService, private route: Router, private AppelService: AppelationService) {

  }

  ngOnInit(): void {
    this.recupeRecetteDetail();
  }

  recupeRecetteDetail() {
    this.http.get('http://localhost:8289/recette-detail/' + this.recetteService.getRecetteActu().id).subscribe({
      next: (data)=> { this.recetteDetail = data; },
      error: (err) => { console.log(err); }
    })
  }

  gestionPrep(prep: string){
    let res = prep?.split("*", 100);
    // console.log(res);
    return res;
  }

  ajoutFavoris(){
    
    let fav = {user: this.service.getUserConnected(), recette: this.recetteService.getRecetteActu()}
    this.http.post('http://localhost:8289/favori', fav).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err)}
    })
  }

  goToVins(val: any){
    this.AppelService.saveAppelation(val);
    this.route.navigateByUrl('listeVin');
  }
  

}
