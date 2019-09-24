import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navController: NavController) { }

  goToProfile() {
    this.navController.navigateForward('/home/profile');
  }

  logout() {
    this.navController.navigateForward('/home');
  }

}
