import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-liste-vin',
  templateUrl: './liste-vin.component.html',
  styleUrls: ['./liste-vin.component.css']
})
export class ListeVinComponent {

  vin: any;
  constructor(private http: HttpClient, private recetteService: RecetteService, private route: Router) {

  }

  ngOnInit(): void {
    this.recupeVin();

  }

  recupeVin() {
    this.http.get('http://localhost:8289/vin').subscribe({
      next: (data) => { this.vin = data; },
      error: (err) => { console.log(err); }

    });
  }

}
