import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams } from "@angular/common/http";
import { Movie } from '../models/movies.model';
import { ResponseMe, UserSignin, UserSignup } from '../models/user.model';
import { SigninResponse } from '../models/token.models';
const { primeEndpoint } = environment;

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  accessToken:string;
  setAccessToken(token: string) {
    this.accessToken = token;
  }
  allMovies() {
    return this.httpClient.get(`${primeEndpoint}movies`).toPromise() as Promise<Movie[]>;
  }
  specificMovie(id:number) {
    return this.httpClient.get(`${primeEndpoint}movies/${id}`);
  }
  signup(user: UserSignup) {
    return this.httpClient.post(`${primeEndpoint}auth/signup`, user,{observe: 'response'});
  }

  signin(user: UserSignin) {
     return this.httpClient.post(`${primeEndpoint}auth/signin`, user,{observe: 'response'});
    }
  personalInfo(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Token': 'Bearer ' + this.accessToken
   });
    return this.httpClient.get(`${primeEndpoint}/auth/me`,{headers:reqHeader}).toPromise() as Promise<ResponseMe>;
  }
}