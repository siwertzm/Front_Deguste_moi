import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppelationService {

  constructor() { }

  saveAppelation(appelation: any){
    localStorage.setItem('appelation',JSON.stringify(appelation))
  }

  getAppelation(){
    let appelation: any = localStorage.getItem('appelation');
    return JSON.parse(appelation);
  }
}
