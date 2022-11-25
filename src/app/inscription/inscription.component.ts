import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private http: HttpClient, private route : Router){}

  ngOnInit(): void{

  }
  inscription(val: any){
    
    this.http.post('http://localhost:8289/user', val).subscribe({
    next: (data)=> {console.log(data)
      this.route.navigateByUrl('recettes');
    
    },
    error: (err)=> {console.log(err); }
  })
  }
}
