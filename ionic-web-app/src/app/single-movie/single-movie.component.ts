import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movies.model'
import {PrimeService} from '../services/prime.service'
import {DomSanitizer} from '@angular/platform-browser'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
movie: Movie={} as Movie;
id:number
urlSafe:any
url:string = "https://www.youtube.com/embed/"
userId:string | null = null
  constructor(private service :PrimeService,private sanitizer:DomSanitizer ) { }

    async ngOnInit() {
      this.userId=await (await this.service.personalInfo()).user.id
    // this.service.specificMovie(10138).subscribe(response => {
     //   let obj = response as Movie;
      //  this.movie = obj; })
      
    }
      getEmbeded(){
       return this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer)
      }
      addFavorite(){
        this.service.addFavorite(Number(this.movie.id))
      }
      removeFavorite(){
        this.service.removeFavorite(this.userId,this.movie.id)
      }
  }
  
    
    
  


