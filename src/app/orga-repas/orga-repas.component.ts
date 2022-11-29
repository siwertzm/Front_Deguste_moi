import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-orga-repas',
  templateUrl: './orga-repas.component.html',
  styleUrls: ['./orga-repas.component.css']
})
export class OrgaRepasComponent {
  amis: any;
  part: any;
  activeRepas: any;
  constructor(private http: HttpClient, private route : Router, private authService: AuthService){}

ngOnInit(): void{
  this.recupAmis();
}

createRepas(val: any) {

  val.hote = this.authService.getUserConnected();
  this.http.post('http://localhost:8289/repas', val).subscribe({
    next: (data)=> {console.log(data)
      this.activeRepas = data;
    },
    error: (err)=> {console.log(err); }
  })
}

recupAmis() {
  let user = this.authService.getUserConnected();
  this.http.get('http://localhost:8289/user/friends/' + user.id).subscribe({
      next: (data) => { this.amis = data; },
      error: (err) => { console.log(err); }
    });
}

envoieParticipations(val: any, id: any) {
    val.user = id;
    val.repas = this.activeRepas;
    val.accept = false;
    this.http.post('http://localhost:8289/participation', val).subscribe({
      next: (data) => { console.log(data); },
      error: (err) => { console.log(err); }
    });
  }

}
