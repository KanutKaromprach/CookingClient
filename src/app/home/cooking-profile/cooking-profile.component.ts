import { Component, OnInit } from '@angular/core';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';
import { UserProfile } from 'src/app/model/userProfile';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cooking-profile',
  templateUrl: './cooking-profile.component.html',
  styleUrls: ['./cooking-profile.component.scss'],
})
export class CookingProfileComponent implements OnInit {

  cooking: Cooking;
  profile: UserProfile;

  constructor(private cookingService: CookingService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.profile = new UserProfile();
    this.cookingService.getCookingByUsertrname('somrat').subscribe((result) => {
      this.profile = result.userProfile;
    });
  }

  save() {
    this.cookingService.getCookingByUsertrname('somrat').subscribe((result) => {
      this.cooking = result;
      this.cooking.userProfile = this.profile;
      this.cookingService.updateProfile(this.cooking).subscribe((result2) => {
        this.presentLoadingWithOptions();
      });
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 200,
      message: 'Save ...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
