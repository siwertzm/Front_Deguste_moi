import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-mes-evenements',
  templateUrl: './mes-evenements.component.html',
  styleUrls: ['./mes-evenements.component.css']
})
export class MesEvenementsComponent {
  evenements: any;

  constructor(private http: HttpClient, private authService: AuthService, private route: Router) {

  }

  ngOnInit(): void{
    this.recupEvents();
  }

recupEvents() {
  let user = this.authService.getUserConnected();
  this.http.get('http://localhost:8289/user/participation/future/' + user.id).subscribe({
      next: (data) => { this.evenements = data; },
      error: (err) => { console.log(err); }
    });
}
}
