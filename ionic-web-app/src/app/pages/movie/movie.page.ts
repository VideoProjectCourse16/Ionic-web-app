import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie, ResponseSpecificMovie } from 'src/app/models/movies.model';
// import {DomSanitizer} from '@angular/platform-browser'
import { PrimeService } from 'src/app/services/prime.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  idMovieProva:any;
  movie: Movie={} as Movie;
  // id:number
  // urlSafe:any
  // url:string = "https://www.youtube.com/embed/"
  //userId:string | null = null
    constructor(private service :PrimeService,private sanitizer:DomSanitizer ) { }
  
      async ngOnInit() {
        //this.userId=await (await this.service.personalInfo()).user.id
        this.service.specificMovie(this.idMovieProva).subscribe(response => {
         let obj = response as Movie;
         this.movie = obj; })
        console.log("history.state.data",JSON.stringify(history.state.data));
        this.idMovieProva=history.state.data.idMovie
      }
        // getEmbeded(){
        //  return this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer)
        // }
        // addFavorite(){
        //   this.service.addFavorite(Number(this.movie.id))
        // }
        // removeFavorite(){
        //   this.service.removeFavorite(this.userId,this.movie.id)
        // }
}

