import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { PrimeService } from 'src/app/services/prime.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  user: User = {} as User

  constructor(private service: PrimeService,private router: Router) { }

  async ngOnInit() {
    this.user = await this.service.personalInfo().then(response => response.user)
  }

  logout(){
    this.service.setAccessToken(null);
    this.router.navigate(['/signin'],{replaceUrl:true})
  }
}
