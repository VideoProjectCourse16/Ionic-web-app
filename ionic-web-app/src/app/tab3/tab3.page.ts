import { Movie } from 'src/app/models/movies.model';
import { Favorite, Favorites } from './../models/favorites.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeService } from '../services/prime.service';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
movie: Movie={} as Movie;
id:number
urlSafe:any
url:string = "https://www.youtube.com/embed/"

  constructor(private service: PrimeService, private router: Router, private sanitizer:DomSanitizer ,private route: ActivatedRoute) { }
  isTokenSetted: boolean = false;
  favorites:Movie[]=[];
  async ngOnInit() {
    this.isTokenSetted = (this.service.accessToken !== null) ? true : false;
    this.getFavorites();
  }

  async getFavorites(){
    const favoritesResponse:Favorite[]=(await this.service.getFavorites()).favorites;
      favoritesResponse.map(async favorite=>{
      this.service.specificMovie(Number(favorite.id)).subscribe((response: Movie) => {
        this.favorites.push(response);
      })
    })
  }

  goToSpecificMovie(idMovie:string){
    this.router.navigate([ `../single-movie/${idMovie}` ], {state: {idMovie}, relativeTo:this.route});
     
   }
}

