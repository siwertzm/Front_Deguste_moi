import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-vin-region',
  templateUrl: './vin-region.component.html',
  styleUrls: ['./vin-region.component.css']
})
export class VinRegionComponent {

  vin: any;
  constructor(private http: HttpClient, private recetteService: RecetteService, private route: Router) {

  }

  ngOnInit(): void {
    let region: any = localStorage.getItem('appelation');
    this.go(JSON.parse(region));

  }

  recupeVin() {
    this.http.get('http://localhost:8289/vin').subscribe({
      next: (data) => { this.vin = data;},
      error: (err) => { console.log(err); }

    });
  }

  go(val: any) {
    this.http.get('http://localhost:8289/vin/region/' + val).subscribe({
      next: (data) => { this.vin = data; },
      error: (err) => { console.log(err); }

    });
  }

  rechercheVin(val: string) {
    if(val != ''){
      this.http.get('http://localhost:8289/vin/' + val).subscribe({
        next: (data)=> { this.vin = data; console.log(val)},
        error: (err) => { console.log(err);}
      });
    }else {
      this.http.get('http://localhost:8289/vin').subscribe({
      next: (data) => { this.vin = data;},
      error: (err) => { console.log(err); }

    });
    }

  }

  goToVin(val: any) {
    this.recetteService.saveRecetteActu(val);
    this.route.navigateByUrl('ficheRecette');

  }

}
