import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from '../biere';
import { BIERES } from '../mock-bieres'

@Component({
  selector: 'app-detail-biere',
  templateUrl: './detail-biere.component.html',
  styleUrls: ['detail-biere.component.css']
})
export class DetailBiereComponent implements OnInit {

  biereList: Biere[];
  biere: Biere|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.biereList= BIERES;
    const biereId: number = +this.route.snapshot.paramMap.get('id');

    if(biereId) {
    this.biere = this.biereList.find(biere => biere.id == biereId)
    } 
  }
  
  goToBiereList() {
     this.router.navigate(['/bieres']);
  }
}
