import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Deguste_moi';
  

  constructor(public authService: AuthService){}

  isHome = false;

  public url ="";
  urlOrga(){
    
    if (this.authService.isConnected()){
      this.url="OrgaRepas";
    }else{
      this.url="login";
    }
    return this.url;

  }
  

}



  

