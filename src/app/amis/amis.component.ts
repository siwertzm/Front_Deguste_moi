import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth/auth.service';
import {Component, OnInit} from '@angular/core';
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
  constructor(private http: HttpClient, private service: AuthService){

  }

  ngOnInit() {
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
    this.http.get('http://localhost:8289/user/' + val).subscribe({
      next: (data)=> { this.user = data; console.log(this.user); console.log(this.userConnected)},
      error: (err)=> { console.log(err)}
    });
  }


  demande(val:any){
    this.http.post('http://localhost:8287/demande', val).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err); }
  })
  
  }
}
