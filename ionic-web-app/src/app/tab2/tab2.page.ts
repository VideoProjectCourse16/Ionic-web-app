import { PrimeService } from 'src/app/services/prime.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page implements OnInit{

 allMovies : Movie[] = [] 
 term : string | null = null;
  constructor(private service: PrimeService,private router: Router) {}

  async ngOnInit() {
      this.allMovies = await this.service.allMovies().then(response => response)
  }
  isEmptySearch(){
    return this.term == null || this.term.length == 0 ? false : true
  }

  goToSpecificMovie(idMovie:string){
    this.router.navigate(['movie'], {state: {idMovie}})
     
   }






}
  

