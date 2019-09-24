import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CookingDashboardComponent } from './cooking-dashboard/cooking-dashboard.component';
import { CookingDetailComponent } from './cooking-detail/cooking-detail.component';
import { CookingSummaryComponent } from './cooking-summary/cooking-summary.component';
import { CookingModalComponent } from './cooking-modal/cooking-modal.component';
import { CookingProfileComponent } from './cooking-profile/cooking-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'dashboard/:username',
        component: HomePage
      },
      {
        path: 'cooking-detail/:type/:username',
        component: CookingDetailComponent
      },
      {
        path: 'cooking-summary/:id',
        component: CookingSummaryComponent
      },
      {
        path: 'profile',
        component: CookingProfileComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  declarations: [HomePage, CookingDashboardComponent, CookingDetailComponent, CookingSummaryComponent, CookingModalComponent,
    CookingProfileComponent, LoginComponent, RegisterComponent],
  entryComponents: [CookingModalComponent]
})
export class HomePageModule { }
