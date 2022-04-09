import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movies.model';
import { PrimeService } from '../../services/prime.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {
  @Input() movies: Movie[];
  @Input() genre: string;

  constructor(private service :PrimeService,private router: Router) { }

  ngOnInit() {
    
    
  }
  
  goToSpecificMovie(idMovie:string){
   this.router.navigate(['movie'], {state: {idMovie}})
    
  }

}
