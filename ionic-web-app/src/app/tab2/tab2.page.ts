import { PrimeService } from 'src/app/services/prime.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies.model';
import { ActivatedRoute, Router } from '@angular/router';
import { mockMovies } from '../models/movieMock';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page implements OnInit{

 allMovies : Movie[] = [] 
 term : string | null = null;
  constructor(private service: PrimeService,private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
      this.allMovies =mockMovies //await this.service.allMovies().then(response => response)
  }
  isEmptySearch(){
    return this.term == null || this.term.length == 0 ? false : true
  }

  goToSpecificMovie(idMovie:string){
    this.router.navigate([`../single-movie/${idMovie}`], {state: {idMovie}, relativeTo:this.route}) 
   }






}
  

