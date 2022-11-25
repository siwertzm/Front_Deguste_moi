import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recetteDetailActu: any;
  //recetteActu: any;
  constructor() { }

  

  saveRecetteActu(recette: any){
    localStorage.setItem('recetteActu',JSON.stringify(recette));
  }

  getRecetteActu(){
    let recette:any = localStorage.getItem('recetteActu');
    return JSON.parse(recette);
  }
}
