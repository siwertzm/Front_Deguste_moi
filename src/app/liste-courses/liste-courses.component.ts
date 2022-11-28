import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent {

  produits: any;
  user: any;
  courses: any;

  constructor(private http: HttpClient, private authService: AuthService, private route: Router) {
  }


  ngOnInit(): void {
    this.recupProduits();
    this.recupCourses();
  }

  recupProduits() {
    this.http.get('http://localhost:8289/produit').subscribe({
      next: (data) => { this.produits = data; console.log(this.produits);},
      error: (err) => { console.log(err); }
  });
}

  recupCourses() {
    this.user = this.authService.getUserConnected(),
    this.http.get('http://localhost:8289/course/' + this.user).subscribe({
      next: (data) => { this.produits = data; console.log(this.courses);},
      error: (err) => { console.log(err); }
});
}

addCourse(a: any) {
  let val: any;
  val.quantity = 1;
  val.produit = a;
  val.user = this.authService.getUserConnected();

  this.http.post('http://localhost:8289/demande', val).subscribe({
    next: (data)=> {console.log(data)
      this.route.navigateByUrl('listeCourses');
    
    },
    error: (err)=> {console.log(err); }
  })
}

}
