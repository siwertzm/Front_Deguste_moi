import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  user:any;
  msg:any;
  isbadlog = false;
  isConnected = false;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService){}
  Connexion(val: any) {
    this.msg='';
    this.http.post('http://localhost:8289/login',val).subscribe({
      next: (data) => {
        this.user = data;
        if(this.user != null){
          this.authService.setUserSession(this.user);
          console.log('connect ok');
          this.route.navigateByUrl('recettes');
        }else{
          console.log('VOUS NE PASSEREZ PAS!');
          this.msg = 'identifiant ou mot de passe incorrect';
          this.isbadlog = true;
        }
      },
      error: (err) =>{console.log(err);}
    });

}
}

