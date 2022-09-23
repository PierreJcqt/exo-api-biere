import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biere } from '../biere';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biere-list',
  templateUrl: 'biere-list.component.html',
  styleUrls: ['biere-list.component.css']
})
export class BiereListComponent implements OnInit {


  Biere: Biere[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
   this.http.get<Biere[]>('https://api.punkapi.com/v2/beers')
   .subscribe(res => { this.Biere = res });
  } 

  goToBiere(biere: Biere) {
   this.router.navigate(['/biere', biere.id])
  }

}
  
