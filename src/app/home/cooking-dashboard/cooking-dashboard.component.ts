import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';

@Component({
  selector: 'app-cooking-dashboard',
  templateUrl: './cooking-dashboard.component.html',
  styleUrls: ['./cooking-dashboard.component.scss'],
})
export class CookingDashboardComponent implements OnInit {

  cooking: Cooking;
  step1Status: boolean;
  step2Status: boolean;
  step3Status: boolean;


  constructor(private navController: NavController, private cookingService: CookingService) { }

  ngOnInit() {
    this.cookingService.getCookingByUsrtrname('ball').subscribe((result) => {
      this.step1Status = result.ingredient.status;
      this.step2Status = result.seasoning.status;
      this.step3Status = result.status;
    }
    );
  }

  goToDetail(type: string): void {
    this.navController.navigateForward('/home/cooking-detail/' + type);
  }

}
