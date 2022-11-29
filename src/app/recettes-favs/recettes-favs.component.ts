import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recettes-favs',
  templateUrl: './recettes-favs.component.html',
  styleUrls: ['./recettes-favs.component.css']
})
export class RecettesFavsComponent {

  recette: any;
  userConnected : any;
  status: any;
  constructor(private http: HttpClient, private service: AuthService, private recetteService: RecetteService, private route: Router) {

  }

  ngOnInit(): void {
    this.userConnected = this.service.getUserConnected();
    this.recupeFavoris(this.userConnected.id);

  }

  recupeFavoris(val: any) {
    this.http.get('http://localhost:8289/favori/user/' + val).subscribe({
      next: (data) => { this.recette = data;},
      error: (err) => { console.log(err); }

    });

    
  }

  gestionSubTitle(sub: string){
    let res = sub.split("*", 10);
    // console.log(res);
    return res;
  }

  go(val: any) {
    this.http.get('http://localhost:8289/recette/' + val).subscribe({
      next: (data) => { this.recette = data; },
      error: (err) => { console.log(err); }

    });
  }

  goToRecette(val: any) {
    this.recetteService.saveRecetteActu(val);
    this.route.navigateByUrl('ficheRecette');

  }

  supFavoris(val: any){

    this.http.delete('http://localhost:8289/favori/'+ val).subscribe(()=> this.status = 'delete success');
    window.location.reload();
    
  }

}
