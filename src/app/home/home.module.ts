import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CookingDashboardComponent } from './cooking-dashboard/cooking-dashboard.component';
import { CookingDetailComponent } from './cooking-detail/cooking-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'cooking-detail/:type',
        component: CookingDetailComponent
      }
    ])
  ],
  declarations: [HomePage, CookingDashboardComponent, CookingDetailComponent]
})
export class HomePageModule { }
