import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';

@Component({
  selector: 'app-cooking-dashboard',
  templateUrl: './cooking-dashboard.component.html',
  styleUrls: ['./cooking-dashboard.component.scss'],
})
export class CookingDashboardComponent implements OnInit {

  cooking: Cooking;

  constructor(private navController: NavController,
              private cookingService: CookingService,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.cookingService.getCookingByUsertrname('ball').subscribe((result) => {
      this.cooking = result;
    });
  }

  goToDetail(type: string): void {
    this.navController.navigateForward('/home/cooking-detail/' + type);
  }

  save() {
    this.cookingService.updateCooking(this.cooking).subscribe((result) => {
      this.presentLoadingWithOptions();
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
