import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
