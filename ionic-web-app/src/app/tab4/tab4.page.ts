import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { PrimeService } from '../services/prime.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  user: User = {} as User

  constructor(private service: PrimeService,private router: Router) { }

  async ngOnInit() {
    this.user = await this.service.personalInfo().then(response => response.user)
  }

  logout(){
    this.service.setAccessToken(null);
    this.router.navigate(['tabs/signin'],{replaceUrl:true})
  }
  //constructor(private service: PrimeService, private router: Router) { }
  // isTokenSetted: boolean = false;
  // async ngOnInit() {
  //   this.isTokenSetted=(this.service.accessToken!==null) ? true : false
  // }
}
