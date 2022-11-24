import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent {

  recette: any;
  constructor(private http: HttpClient) {

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

}
