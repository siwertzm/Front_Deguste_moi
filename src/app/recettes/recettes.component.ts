import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
  
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

  gestionSubTitle(sub: string){
    let res = sub.split("*", 10);
    // console.log(res);
    return res;
  }

  go() {
    this.http.get('http://localhost:8289/recette/').subscribe({
      next: (data) => { this.recette = data; },
      error: (err) => { console.log(err); }

    });
  }
}
