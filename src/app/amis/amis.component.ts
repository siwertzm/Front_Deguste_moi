import { HttpClient } from '@angular/common/http';
import { Data, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import {Component, NgIterable, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface User {
  name: string;
}

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent implements OnInit{
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]>;

  user: any;
  userConnected: any;
  demandeactu: any;

  constructor(private http: HttpClient, private service: AuthService, private route : Router){

  }

  ngOnInit() {
    this.gestionDemande();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  rechercheByLogin(val: any) {
    this.userConnected = this.service.getUserConnected();
    this.http.get('http://localhost:8289/user/'+ val).subscribe({
      next: (data)=> { this.user = data; console.log(this.user); console.log(this.userConnected)},
      error: (err)=> { console.log(err)}
    });
  }


  demande(){
   let demande = {envoyeur: this.userConnected, receveur: this.user, valide: false};
  console.log(demande);
    this.http.post('http://localhost:8289/demande', demande).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err);}
      
  })}

  gestionDemande(){
    this.http.get('http://localhost:8289/demande').subscribe({
    next: (data)=> {this.demandeactu = data; console.log(this.demandeactu)},
    error: (err)=> {console.log(err)}
    });
  }

  accepterDemande(){
    
  }
  
}
