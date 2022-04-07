import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movies.model';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() genre: string;

  constructor(private service :PrimeService,private router: Router) { }

  ngOnInit() {
    
    
  }
  
  goToSpecificMovie(idMovie:string){
   this.router.navigate(['movie'], {state: {data: {idMovie}}})
    
  }

}
