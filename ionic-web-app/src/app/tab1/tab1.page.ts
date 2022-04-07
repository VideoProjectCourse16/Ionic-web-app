import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genres } from '../genres';
import { Movie } from '../models/movies.model';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  movies:Movie[]=[];
  actionMovies:Movie[]=[];
  adventureMovies:Movie[]=[];
  genres=genres;
  constructor(private PrimeService: PrimeService,private router:Router) {}
  async ngOnInit() {
    this.movies=await this.PrimeService.allMovies();
    this.actionMovies=this.movies.filter(movie=>movie.genre==genres.action)
    this.adventureMovies=this.movies.filter(movie=>movie.genre==genres.adventure)
    console.log(this.actionMovies.length)
  }
}
