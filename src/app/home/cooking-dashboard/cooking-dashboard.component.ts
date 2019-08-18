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

  constructor(private navController: NavController) { }

  ngOnInit() { }

  goToDetail(type: string): void {
    this.navController.navigateForward('/home/cooking-detail/' + type);
  }

}
