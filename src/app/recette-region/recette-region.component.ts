import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-recette-region',
  templateUrl: './recette-region.component.html',
  styleUrls: ['./recette-region.component.css']
})
export class RecetteRegionComponent {
  recette: any;
  constructor(private http: HttpClient, private vinService: VinService, private route: Router) {

  }

  ngOnInit(): void {
    let region: any = localStorage.getItem('appelation');
    this.go(JSON.parse(region));

  }

  recupeRecette() {
    this.http.get('http://localhost:8289/recette').subscribe({
      next: (data) => { this.recette = data;},
      error: (err) => { console.log(err); }

    });
  }

  go(val: any) {
    this.http.get('http://localhost:8289/recette/region/' + val).subscribe({
      next: (data) => { this.recette = data; },
      error: (err) => { console.log(err); }

    });
  }

  rechercheRecette(val: string) {
    if(val != ''){
      this.http.get('http://localhost:8289/recette/' + val).subscribe({
        next: (data)=> { this.recette = data; console.log(val)},
        error: (err) => { console.log(err);}
      });
    }else {
      this.http.get('http://localhost:8289/recette').subscribe({
      next: (data) => { this.recette = data;},
      error: (err) => { console.log(err); }

    });
    }

  }

  goToRecette(val: any) {
    this.vinService.saveVinActu(val);
    this.route.navigateByUrl('ficheVin');

  }

}
