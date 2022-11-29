import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-mes-evenements',
  templateUrl: './mes-evenements.component.html',
  styleUrls: ['./mes-evenements.component.css']
})
export class MesEvenementsComponent {

  invitation: any;
  status: any;
  constructor(private http: HttpClient, private authService: AuthService){

  }

  ngOnInit(){
    this.recupeInvite(this.authService.getUserConnected().id);

  }

  recupeInvite(val: any){
    this.http.get('http://localhost:8289/participation/accepted/' + val).subscribe({
      next: (data)=> { this.invitation = data, console.log(this.invitation)},
      error: (err)=> { console.log(err)}

    });
  }

  supInvite(val: any){
    console.log(val);
    this.http.delete('http://localhost:8289/participation/reject/'+ val).subscribe(()=> this.status = 'delete success');
    window.location.reload();
    
  }

  acceptInvite(val: any, val2: any){
    this.http.patch('http://localhost:8289/participation/accept/' + val, val2).subscribe(()=> this.status = 'accept');
    window.location.reload();
  }

}
