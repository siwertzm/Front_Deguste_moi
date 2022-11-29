import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppelationService } from '../appelation.service';
import { AuthService } from '../services/auth/auth.service';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-fiche-vin',
  templateUrl: './fiche-vin.component.html',
  styleUrls: ['./fiche-vin.component.css']
})
export class FicheVinComponent {
  vinDetail : any;
  constructor(private http: HttpClient, public vinService: VinService, public service: AuthService, private route: Router, private AppelService: AppelationService) {

  }


ngOnInit(): void {
  this.recupeVinDetail();
}
recupeVinDetail() {
  this.http.get('http://localhost:8289/vin-detail/' + this.vinService.getVinActu().id).subscribe({
    next: (data)=> { this.vinDetail = data; },
    error: (err) => { console.log(err); }
  })
}

ajoutFavoris(){
    
  let fav = {user: this.service.getUserConnected(), vin: this.vinService.getVinActu()}
  this.http.post('http://localhost:8289/favori', fav).subscribe({
    next: (data)=> {console.log(data)},
    error: (err)=> {console.log(err)}
  })
}


gestionPrep(prep: string){
  let res = prep?.split("*", 100);
  // console.log(res);
  return res;
}
goToRecettes(val: any){
  this.AppelService.saveAppelation(val);
  this.route.navigateByUrl('listeRecetteRegion');
}


}