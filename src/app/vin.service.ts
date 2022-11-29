import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  constructor() { }

  saveVinActu(vin: any){
    localStorage.setItem('vinActu', JSON.stringify(vin));
  }

  getVinActu(){
    let vin: any = localStorage.getItem('vinActu');
    return JSON.parse(vin);
  }
}
