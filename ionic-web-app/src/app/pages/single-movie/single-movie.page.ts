import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movies.model'
import {PrimeService} from '../../services/prime.service'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { mockMovies } from 'src/app/models/movieMock';
import { ActivatedRoute, Router } from '@angular/router';
// import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.page.html',
  styleUrls: ['./single-movie.page.scss'],
})
export class SingleMoviePage implements OnInit {
  idMovie: string;
  movie: Movie = {} as Movie;
  urlSafe: SafeResourceUrl;
  userId: string | null = null
  constructor(private service: PrimeService, private router:Router, private sanitizer: DomSanitizer, private route:ActivatedRoute) { }
  async ngOnInit() {
    // this.idMovie = history.state.idMovie;
    // this.getMovieById(this.idMovie)
    this.userId= (await this.service.personalInfo()).user.id
     this.route.params.subscribe( params => {
      this.idMovie= params['idMovie'];
     console.log(params['idMovie']);
     
  })
  this.getMovieById(this.idMovie)
    // this.service.specificMovie(Number(this.idMovie)).subscribe((response: Movie) => {
    //   this.movie = response;
    // })
    
  }

  getMovieById=(id:string)=>{
      this.movie=mockMovies.find(({id:movieId})=>movieId===id)
  }


  getEmbeded() {
    return this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer!)
  }
  addFavorite(){
    this.service.addFavorite(Number(this.movie.id))
  }
  removeFavorite(){
    this.service.removeFavorite(this.userId,this.movie.id)
  }
  // addFavorite() {
  //   this.service.addFavorite(Number(this.movie.id))
  // }
  // removeFavorite() {
    //this.userId = await (await this.service.personalInfo()).user.id
  //   this.service.removeFavorite(this.userId, this.movie.id)
  // }
}
