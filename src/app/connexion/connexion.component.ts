import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private route: Router){}
  Connexion(val: any) {
    this.msg='';
    this.http.post('http://localhost:8289/login',val).subscribe({
      next: (data) => {
        this.user = data;
        if(this.user != null){
          console.log('connect ok');
          this.route.navigateByUrl('');
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

