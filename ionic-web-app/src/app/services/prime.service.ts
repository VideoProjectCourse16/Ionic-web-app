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
  allMovies() {
    return this.httpClient.get(`${primeEndpoint}/movies`).toPromise() as Promise<Movie[]>;
  }
  signup(user: UserSignup) {
    return this.httpClient.post(`${primeEndpoint}/auth/signup`, user).subscribe();
  }

  signin(user: UserSignin) {
     this.httpClient.post(`${primeEndpoint}/auth/signin`, user,{responseType: 'json'}).subscribe(response=>{
      let {user}=response as unknown as SigninResponse
      this.accessToken=user.token}) 
    return this.httpClient.post(`${primeEndpoint}/auth/signin`, user).subscribe();
  }
  personalInfo(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Token': 'Bearer ' + this.accessToken
   });
    return this.httpClient.get(`${primeEndpoint}/auth/me`,{headers:reqHeader}).toPromise() as Promise<ResponseMe>;
  }
}