import { Component, OnInit } from '@angular/core';
import { CookingService } from 'src/app/service/cooking.service';
import { Cooking } from 'src/app/model/cooking';
import { NavController } from '@ionic/angular';
import { UserProfile } from 'src/app/model/userProfile';
import { CookingMaterial } from 'src/app/model/cookingMaterial';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  cooking: Cooking;
  profile: UserProfile;

  constructor(private cookingService: CookingService, private navController: NavController) { }

  ngOnInit() {
    this.profile = new UserProfile();
    this.cooking = new Cooking();
  }

  save() {
    this.cooking.userProfile = this.profile;
    this.cooking.ingredientMeat = new Array<CookingMaterial>();
    this.cooking.ingredientVeg = new Array<CookingMaterial>();
    this.cooking.seasoning = new Array<CookingMaterial>();
    this.cooking.noodle = new Array<CookingMaterial>();
    this.cookingService.createCooking(this.cooking).subscribe((result2) => {
      this.navController.navigateForward('/home');
    });
  }

}
