import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RecetteService } from '../services/recette.service';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Deguste_moi';
  

  constructor(public authService: AuthService, private route: Router, private recetteService: RecetteService, private http: HttpClient, private vinService: VinService){}

  isHome= true;
  recette: any;
  recetteDetail: any;
  id_recette: any;
  vin: any;
  vinDetail: any;

  public url ="";
  urlOrga(){
    
    if (this.authService.isConnected()){
      this.url="OrgaRepas";
    }else{
      this.url="login";
    }
    return this.url;

  }

  ngOnInit(): void {
    //this.affichageHome();
    let date: any = localStorage.getItem('date');
    let datenow: any = new Date();

    if (JSON.parse(date) != null){
      if (JSON.parse(date) != JSON.parse(JSON.stringify(datenow.getDate()))){
        this.recetteJour();
        this.vinJour();
        console.log('test pas jour');
      } else {
        this.recetteJourByID(localStorage.getItem('id'));
        this.vinJourById(localStorage.getItem('id'));
        console.log('test meme jour');
        
      }
    } else {
      this.recetteJour();
      this.vinJour();
      console.log('date null');
    }
  }

  recetteJour(){
    const recette = this.http.get('http://localhost:8289/recette/random').toPromise();
    recette.then(data=>{
      let date = new Date();
      localStorage.setItem('date', JSON.stringify(date.getDate()))
      this.recette = data;
      localStorage.setItem('id', JSON.stringify(this.recette.id))
      this.recupRecetteDetail(this.recette.id);
    })
  }

  recetteJourByID(val: any){
    const recette = this.http.get('http://localhost:8289/recette/id/' + val).toPromise();
    recette.then(data=>{
      this.recette = data;
      this.recupRecetteDetail(this.recette.id);
    })
  }

  recupRecetteDetail(val: any){
    this.http.get('http://localhost:8289/recette-detail/' + val).subscribe({
      next: (data) => { this.recetteDetail = data; console.log(this.recette);},
      error: (err) => { console.log(err); }
    })
  }

  goToRecette(val: any) {
    this.recetteService.saveRecetteActu(val);
    this.route.navigateByUrl('ficheRecette');

  }
  
  vinJour(){
    const vin = this.http.get('http://localhost:8289/vin/random').toPromise();
    vin.then(data=>{
      let date = new Date();
      localStorage.setItem('date', JSON.stringify(date.getDate()))
      this.vin = data;
      localStorage.setItem('id', JSON.stringify(this.vin.id))
      this.recupVinDetail(this.vin.id);
    })
  }
  recupVinDetail(val: any){
    this.http.get('http://localhost:8289/vin-detail/' + val).subscribe({
      next: (data) => { this.vinDetail = data; console.log(this.vin);},
      error: (err) => { console.log(err); }
    })
  }

  goToVin(val: any) {
    this.vinService.saveVinActu(val);
    this.route.navigateByUrl('ficheVin');

  }

  vinJourById(val : any){
    const vin = this.http.get('http://localhost:8289/vins/' + val).toPromise();
    vin.then(data=>{
      this.vin = data;
      this.recupVinDetail(this.vin.id);
    })
  }

}
