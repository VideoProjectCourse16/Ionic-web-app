import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private PrimeService: PrimeService,
    private router: Router,
    private route: ActivatedRoute

  ) {}


  checkAuth=((tab?:string)=>{
    if(tab==='tab3'){
        if(this.PrimeService.accessToken){
          // this.PrimeService.setUrl('tab3');
          // console.log(this.PrimeService.urlRequested)
         return  'tab3'
        }else{
          return 'signup'
        }
    }else{
      if(this.PrimeService.accessToken){
        // this.PrimeService.setUrl('tab4');
        // console.log(this.PrimeService.urlRequested)
       return  'tab4'
      }else{
        return 'signup'
      }
    }
  })

}
