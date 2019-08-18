import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';
import { CookingMaterial } from 'src/app/model/cookingMaterial';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cooking-detail',
  templateUrl: './cooking-detail.component.html',
  styleUrls: ['./cooking-detail.component.scss'],
})


export class CookingDetailComponent implements OnInit {

  type: string;
  cooking: Cooking;

  constructor(private route: ActivatedRoute, private cookingService: CookingService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.cookingService.getCookingByUsertrname('ball').subscribe((result) => {
      this.cooking = result;
      if (!this.cooking.ingredient.length) {
        this.addMoreIngredient();
      }
    });
  }

  save() {
    this.cooking.ingredient.forEach(o => o.type = 'เนื้อสัตว์');
    this.cookingService.updateCooking(this.cooking).subscribe((result) => {
      this.presentLoadingWithOptions();
    });
  }

  addMoreIngredient() {
    this.cooking.ingredient.push(new CookingMaterial());
  }

  deleteIngredient(index: number) {
    if (this.cooking.ingredient.length > 1) {
      this.cooking.ingredient.splice(index, 1);
    }
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
