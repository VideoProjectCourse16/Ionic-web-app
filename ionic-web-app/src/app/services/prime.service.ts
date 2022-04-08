import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams } from "@angular/common/http";
import { Movie } from '../models/movies.model';
import { ResponseMe, UserSignin, UserSignup } from '../models/user.model';
import { SigninResponse } from '../models/token.models';
import { Favorites } from '../models/favorites.model';
const { primeEndpoint } = environment;

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  accessToken: string | null = null;
  setAccessToken(token: string) {
    this.accessToken = token;
  }
  //MOVIES-------
  allMovies() {
    return this.httpClient.get(`${primeEndpoint}movies`).toPromise() as Promise<Movie[]>;
  }
  specificMovie(id: number) {
    return this.httpClient.get(`${primeEndpoint}movies/${id}`);
  }
  //--------MOVIES

  //AUTH----------git
  signup(user: UserSignup) {
    return this.httpClient.post(`${primeEndpoint}auth/signup`, user, { observe: 'response' });
  }
  signin(user: UserSignin) {
    return this.httpClient.post(`${primeEndpoint}auth/signin`, user, { observe: 'response' });
  }

  personalInfo() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.get(`${primeEndpoint}auth/me`, { headers: reqHeader! }).toPromise() as Promise<ResponseMe>;
  }
  logout() {
    this.setAccessToken(null);
  }
  //-----------AUTH

  //USERS-----------
  getFavorites() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.get(`${primeEndpoint}users/favorites`, { headers: reqHeader! }).toPromise() as Promise<Favorites>;
  }
  addFavorite(movieId: number) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.post(`${primeEndpoint}users/favorites`, movieId, { observe: 'response', headers: reqHeader! });
  }
  removeFavorite(userID: string, movieID: string) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.delete(`${primeEndpoint}users/${userID}/favorites/${movieID}`, { observe: 'response', headers: reqHeader });

  }
  //-----------USERS

  //ADMINS-----------
  addMovie(movie: Movie) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.post(`${primeEndpoint}admins/movies`, movie, { observe: 'response', headers: reqHeader });
  }
  removeMovie(movieID: string) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.delete(`${primeEndpoint}admins/movies/${movieID}`, { observe: 'response', headers: reqHeader });

  }
  addAdmin(username: string) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken!
    });
    return this.httpClient.put(`${primeEndpoint}admins/user/${username}`, { observe: 'response', headers: reqHeader });
  }
  //-----------ADMINS

}