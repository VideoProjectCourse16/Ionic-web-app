import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams } from "@angular/common/http";
import { Movie } from '../models/movies.model';
import { UserSignin, UserSignup } from '../models/user.model';
const { primeEndpoint } = environment;

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  allMovies() {
    return this.httpClient.get(`${primeEndpoint}/movies`).toPromise() as Promise<Movie[]>;
  }
  signup(user: UserSignup) {
    return this.httpClient.post(`${primeEndpoint}/auth/signup`, user).subscribe();
  }

  signin(user: UserSignin) {
    return this.httpClient.post(`${primeEndpoint}/auth/signin`, user).subscribe();
  }
}