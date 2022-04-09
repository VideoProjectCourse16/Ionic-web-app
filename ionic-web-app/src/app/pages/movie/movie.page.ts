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
  idMovie: any;
  movie: Movie = {} as Movie;
  urlSafe: SafeResourceUrl;
  userId: string | null = null
  constructor(private service: PrimeService, private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.userId = await (await this.service.personalInfo()).user.id
    this.service.specificMovie(this.idMovie).subscribe((response: Movie) => {
      this.movie = response;
    })
    console.log("history.state.data", JSON.stringify(history.state.data));
    this.idMovie = history.state.idMovie;
  }
  getEmbeded() {
    return this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer!)
  }
  addFavorite() {
    this.service.addFavorite(Number(this.movie.id))
  }
  removeFavorite() {
    this.service.removeFavorite(this.userId, this.movie.id)
  }
}

