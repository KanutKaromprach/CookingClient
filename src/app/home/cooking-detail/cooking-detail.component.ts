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
  username: string;

  constructor(private route: ActivatedRoute, private cookingService: CookingService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.username = this.route.snapshot.paramMap.get('username');
    this.cookingService.getCookingByUsertrname(this.username).subscribe((result) => {
      this.cooking = result;
    });
  }

  save() {
    this.cooking.ingredientMeat.forEach(o => o.type = 'เนื้อสัตว์');
    this.cooking.ingredientVeg.forEach(o => o.type = 'ผักผลไม้');
    this.cooking.seasoning.forEach(o => o.type = 'เครื่องปรุง');
    this.cooking.noodle.forEach(o => o.type = 'เส้น');
    this.cookingService.updateCooking(this.cooking).subscribe(() => {
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
