import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private navController: NavController) { }

  ngOnInit() { }

  goToHome() {
    this.navController.navigateForward('/home/dashboard/' + this.username);
  }
  goToRegister() {
    this.navController.navigateForward('/home/register');
  }
}
