import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { VinService } from '../vin.service';

@Component({
  selector: 'app-liste-vin',
  templateUrl: './liste-vin.component.html',
  styleUrls: ['./liste-vin.component.css']
})
export class ListeVinComponent {

  vin: any;
  constructor(private http: HttpClient, private vinService: VinService, private route: Router) {

  }

  ngOnInit(): void {
    this.recupeVin();

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
    this.vinService.saveVinActu(val);
    this.route.navigateByUrl('vin');

  }

}
