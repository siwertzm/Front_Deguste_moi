import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fiche-recette',
  templateUrl: './fiche-recette.component.html',
  styleUrls: ['./fiche-recette.component.css']
})
export class FicheRecetteComponent {

  recette: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }
  

}
