import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie, ResponseSpecificMovie } from 'src/app/models/movies.model';
// import {DomSanitizer} from '@angular/platform-browser'
import { PrimeService } from 'src/app/services/prime.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  idMovie: string;
  movie: Movie = {} as Movie;
  urlSafe: SafeResourceUrl;
  userId: string | null = null
  constructor(private service: PrimeService, private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    console.log("history.state.idMovie", JSON.stringify(history.state.idMovie));
    this.idMovie = history.state.idMovie;
    
    this.service.specificMovie(Number(this.idMovie)).subscribe((response: Movie) => {
      this.movie = response;
    })
    
  }
  getEmbeded() {
    return this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer!)
  }
  // addFavorite() {
  //   this.service.addFavorite(Number(this.movie.id))
  // }
  // removeFavorite() {
    //this.userId = await (await this.service.personalInfo()).user.id
  //   this.service.removeFavorite(this.userId, this.movie.id)
  // }
}

