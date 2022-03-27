import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';
import { PrimeService } from 'src/app/services/prime.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie: Movie = {} as Movie;
  constructor(private PrimeService: PrimeService) { }

  async ngOnInit() {
    await this.PrimeService.specificMovie(10138).subscribe(response => {
      let obj = response as any;
      this.movie = obj.movie;
    });
  }
}
