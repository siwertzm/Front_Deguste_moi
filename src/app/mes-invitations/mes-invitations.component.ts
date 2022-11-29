import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-mes-invitations',
  templateUrl: './mes-invitations.component.html',
  styleUrls: ['./mes-invitations.component.css']
})
export class MesInvitationsComponent {

  invitation: any;
  constructor(private http: HttpClient, private authService: AuthService){

  }

  ngOnInit(){
    console.log(this.authService.getUserConnected().id)
    this.recupeInvite(this.authService.getUserConnected().id);

  }

  recupeInvite(val: any){
    this.http.get('http://localhost:8289/participation/user/' + val).subscribe({
      next: (data)=> { this.invitation = data, console.log(this.invitation)},
      error: (err)=> { console.log(err)}

    });
  }

}
