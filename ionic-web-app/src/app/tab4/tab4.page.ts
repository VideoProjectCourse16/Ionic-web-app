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

  constructor(private service: PrimeService, private router: Router) { }
  isTokenSetted: boolean = false;
  async ngOnInit() {
    this.isTokenSetted=(this.service.accessToken) ? true : false
  }
}
