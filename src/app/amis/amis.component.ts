import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent {


  user: any;
  userConnected: any;
  constructor(private http: HttpClient, private service: AuthService){

  }

  ngOnInit(): void {
      
  }

  rechercheByLogin(val: any) {
    this.userConnected = this.service.getUserConnected();
    this.http.get('http://localhost:8289/user/' + val).subscribe({
      next: (data)=> { this.user = data; console.log(this.user); console.log(this.userConnected)},
      error: (err)=> { console.log(err)}
    });
  }

}
