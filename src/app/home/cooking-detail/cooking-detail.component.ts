import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cooking } from 'src/app/model/cooking';
import { CookingService } from 'src/app/service/cooking.service';
import { CookingMaterial } from 'src/app/model/cookingMaterial';

@Component({
  selector: 'app-cooking-detail',
  templateUrl: './cooking-detail.component.html',
  styleUrls: ['./cooking-detail.component.scss'],
})


export class CookingDetailComponent implements OnInit {

  type: string;
  cooking: Cooking;

  constructor(private route: ActivatedRoute, private cookingService: CookingService) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.cookingService.getCookingByUsrtrname('ball').subscribe((result) => {
      this.cooking = result;
      this.addMoreIngredient();
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

}
