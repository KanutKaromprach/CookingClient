import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';
import { ActivatedRoute } from '@angular/router';
import { CookingMaterial } from 'src/app/model/cookingMaterial';

@Component({
  selector: 'app-cooking-dashboard',
  templateUrl: './cooking-dashboard.component.html',
  styleUrls: ['./cooking-dashboard.component.scss'],
})
export class CookingDashboardComponent implements OnInit {

  cooking: Cooking;
  username: string;

  constructor(private navController: NavController,
              private cookingService: CookingService,
              private loadingController: LoadingController,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.cookingService.getCookingByUsertrname(this.username).subscribe((result) => {
      this.cooking = result;
    });
  }

  goToDetail(type: string): void {
    this.navController.navigateForward('/home/cooking-detail/' + type + '/' + this.username);
  }

  save(cookingDataPerson: number) {
    this.cookingService.getCookingByUsertrname(this.username).subscribe((result) => {
      this.cooking = result;
      this.cooking.person = cookingDataPerson;
      this.cookingService.updateCooking(this.cooking).subscribe((result2) => {
        this.presentLoadingWithOptions();
      });
    });
  }

  goToSummary(id: string): void {
    this.navController.navigateForward('/home/cooking-summary/' + id);
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
