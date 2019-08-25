import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';
import { CookingMaterial } from 'src/app/model/cookingMaterial';
import { LoadingController } from '@ionic/angular';

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
      if (!this.cooking.ingredientMeat.length) {
        this.addMoreIngredient('ingredientMeat');
      }
      if (!this.cooking.ingredientVeg.length) {
        this.addMoreIngredient('ingredientVeg');
      }
      if (!this.cooking.ingredientVeg.length) {
        this.addMoreIngredient('seasoning');
      }
    });
  }

  save() {
    this.cooking.ingredientMeat.forEach(o => o.type = 'เนื้อสัตว์');
    this.cooking.ingredientVeg.forEach(o => o.type = 'ผักผลไม้');
    this.cooking.seasoning.forEach(o => o.type = 'เครื่องปรุง');
    this.cookingService.updateCooking(this.cooking).subscribe((result) => {
      this.presentLoadingWithOptions();
    });
  }

  addMoreIngredient(type: string) {
    this.cooking[type].push(new CookingMaterial());
  }

  deleteIngredient(type: string, index: number) {
    if (this.cooking[type].length > 1) {
      this.cooking[type].splice(index, 1);
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
