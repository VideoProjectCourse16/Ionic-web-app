import { Movie } from 'src/app/models/movies.model';
import { Favorites } from './../models/favorites.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: PrimeService, private router: Router, private sanitizer:DomSanitizer ) { }
  isTokenSetted: boolean = false;
  Favorites:Movie[]=[];
  async ngOnInit() {
    this.isTokenSetted = (this.service.accessToken !== null) ? true : false
    
  }
  getEmbeded(){
    return this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer)
   }

}

