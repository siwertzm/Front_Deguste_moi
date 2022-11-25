import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
  
  recette: any;
  constructor(private http: HttpClient, private recetteService: RecetteService, private route: Router) {

  }

  ngOnInit(): void {
    this.recupeRecette();

  }

  recupeRecette() {
    this.http.get('http://localhost:8289/recette').subscribe({
      next: (data) => { this.recette = data; },
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

  rechercheRecette(val: string) {
    this.http.get('http://localhost:8289/recette/titre/' + val).subscribe({
      next: (data)=> { this.recette = data;},
      error: (err) => { console.log(err);}
    });
  }

  goToRecette(val: any) {
    this.recetteService.saveRecetteActu(val);
    this.route.navigateByUrl('ficheRecette');

  }


  }

