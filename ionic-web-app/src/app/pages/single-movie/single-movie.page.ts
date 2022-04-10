import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movies.model'
import {PrimeService} from '../../services/prime.service'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { mockMovies } from 'src/app/models/movieMock';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
// import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.page.html',
  styleUrls: ['./single-movie.page.scss'],
})
export class SingleMoviePage implements OnInit {
  isTokenSetted:boolean = false;
  idMovie: string;
  movie: Movie = {} as Movie;
  urlSafe: SafeResourceUrl;
  user: User | null = null;
  constructor(private service: PrimeService, private router:Router, private sanitizer: DomSanitizer, private route:ActivatedRoute) { }
  async ngOnInit() {
    this.isTokenSetted= (this.service.accessToken) ? true : false;
    this.user= (this.service.accessToken) ?(await this.service.personalInfo()).user: null;
     this.route.params.subscribe( params => {
      this.idMovie= params['idMovie'];
     console.log(params['idMovie']);
     
  })
  this.getMovieById(this.idMovie)
    // this.service.specificMovie(Number(this.idMovie)).subscribe((response: Movie) => {
    //   this.movie = response;
    // })
    this.isFavorite()
    
  }

  getMovieById=(id:string)=>{
      this.movie=mockMovies.find(({id:movieId})=>movieId===id)
  }
 //sistemare questa funzione, il database non funzionava più
  async isFavorite(){
    if(this.service.accessToken){
      const favoritesUser= await this.service.getFavorites().then(response => response.favorites);
      const isFavorite=favoritesUser.filter(favorite=>favorite.username===this.user.username && favorite.movieId===this.idMovie)
      console.log( "isFavorite"+isFavorite);
    }
  }
  //////////////
  getEmbeded() {
    return this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer!)
  }
  addFavorite(){
    this.service.addFavorite(this.movie.id)
  }
  removeFavorite(){
    this.service.removeFavorite(this.user.id,this.movie.id)
  }
}
