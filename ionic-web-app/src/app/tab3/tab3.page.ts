import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(private service: PrimeService, private router: Router) { }
  isTokenSetted: boolean = false;
  async ngOnInit() {
    this.isTokenSetted = (this.service.accessToken !== null) ? true : false
    
  }

}
