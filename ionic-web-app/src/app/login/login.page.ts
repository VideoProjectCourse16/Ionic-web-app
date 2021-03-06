import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SigninResponse } from '../models/token.models';
import { UserSignin } from '../models/user.model';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: UserSignin = {} as UserSignin;
  constructor(
    private PrimeService: PrimeService,
    private router: Router,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  //sistema giusto
  async checklogin() {
    this.PrimeService
      .signin(this.user).subscribe(response => {
        if (response.status === 200) {
          let { user } = response.body as SigninResponse;
          this.PrimeService.setAccessToken(user.token!);
          setTimeout(() => {   
            //this.PrimeService.accessToken &&  this.router.navigate(['./'],{relativeTo: this.route});
            this.router.navigate([`tabs/tab1`], { replaceUrl: true });
            //${this.PrimeService.urlRequested}
            this.user.username = "";
            this.user.password = "";
            this.successLogin(response.statusText)
          }, 1000);
        }
      }, err => {
        if (err) {
          console.log("NON SEI STATO AUTENTICATO PERCHE' LO STATUS E' ", err)
          this.wrongLogin(err.statusText);
        }
      })

  }
  goToSignup() {
    return this.router.navigate(['tabs/signup']);
  }
  async successLogin(message: string) {
    //FAI BENE QUESTO
    const toast = await this.toastController.create({
      header: 'Logged in!',
      message: message,
      duration: 1000,
      color: 'success'
    });
    toast.present();
  }
  async wrongLogin(err: string) {
    //FAI BENE QUESTO
    const toast = await this.toastController.create({
      header: 'Access denied!',
      message: err,
      duration: 1000,
      color: 'danger'
    });
    toast.present();
  }
}
