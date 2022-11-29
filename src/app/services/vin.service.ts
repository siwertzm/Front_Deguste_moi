import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinServiceService {

  constructor() { }

saveVinActu(vin: any){
  localStorage.setItem('vinActu',JSON.stringify(vin));
}

getVinActu(){
  let vin:any = localStorage.getItem('vinActu');
  return JSON.parse(vin);
}
}