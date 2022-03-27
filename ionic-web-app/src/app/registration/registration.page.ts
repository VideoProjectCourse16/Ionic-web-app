import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserSignup } from '../models/user.model';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user: UserSignup = { } as UserSignup;
  constructor(
    private PrimeService: PrimeService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  async addUser() {
    this.PrimeService
      .signup(this.user).subscribe(response => {
        if (response.status === 200) {
          this.rightDatas(response.statusText);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        }
      },err=>{
        this.wrongDatas(err.error.message);
      });
  }
  goToLogin() {
    return this.router.navigate(['signin']);
  }
  async wrongDatas(message:string) {
    //FAI BENE QUESTO
    const toast = await this.toastController.create({
      header: 'Not Created',
      message: message,
      duration: 1000,
      color: 'danger'
    });
    toast.present();
  }
  async rightDatas(message:string) {
    //FAI BENE QUESTO
    const toast = await this.toastController.create({
      header: message,
      message: 'We are going to the logins page',
      duration: 1000,
      color: 'success'
    });
    toast.present();
  }
}
