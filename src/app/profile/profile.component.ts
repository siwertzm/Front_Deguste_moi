import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(private http:HttpClient, public authService:AuthService, private route:Router){}
  NomRegime(val:any){
    let res=null;
    if (val==1){
      res="Aucun"
    }
    if(val==2){
      res="Végétarien"
    }
    if(val==3){
      res="Vegan"
    }
    return res;
  }
  private u:any = null;
  user:any;
  updateUser(val:any){
    let localUser:any = localStorage.getItem('userConnected');
    val.id = JSON.parse(localUser).id;
    if (val.nom==''){
      val.nom = JSON.parse(localUser).nom
    }
    if (val.prenom==''){
      val.prenom = JSON.parse(localUser).prenom
    }
    if (val.login==''){
      val.login = JSON.parse(localUser).login
    }
    if (val.mdp==''){
      val.mdp = JSON.parse(localUser).mdp
    }
    if (val.email ==''){
      val.email = JSON.parse(localUser).email
    }
    if (val.tel ==''){
      val.tel = JSON.parse(localUser).tel
    }

    if (val.regime ==''){
      val.regime = JSON.parse(localUser).regime
    }
    if (val.allergie ==''){
      val.allergie = JSON.parse(localUser).allergie
    }

    
   
   this.http.put<any>('http://localhost:8289/user/update/'+this.authService.getUserConnected().id,val).subscribe({
    next: (data) => {
      this.user = data;
      if(this.user != null){
        this.authService.setUserSession(val);
        console.log('ok');
        this.route.navigateByUrl('profil');
       
      }else{
        console.log('VOUS NE PASSEREZ PAS!');
      }
    },
    error: (err) =>{console.log(err);}
  });;
  }

 
}