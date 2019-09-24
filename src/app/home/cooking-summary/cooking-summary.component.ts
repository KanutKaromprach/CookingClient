import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookingService } from 'src/app/service/cooking.service';
import { Cooking } from 'src/app/model/cooking';
import { CookingList } from 'src/app/model/cookingList';
import { CookingData } from 'src/app/model/cookingData';
import { ModalController } from '@ionic/angular';
import { CookingModalComponent } from '../cooking-modal/cooking-modal.component';

@Component({
  selector: 'app-cooking-summary',
  templateUrl: './cooking-summary.component.html',
  styleUrls: ['./cooking-summary.component.scss'],
})
export class CookingSummaryComponent implements OnInit {

  id: string;
  cooking: Cooking;
  liststring: Array<string>;
  listObject: Array<CookingData>;
  data: CookingData;
  materialList = new CookingList();
  vegList: Array<string>;
  seasonList: Array<string>;
  noodleList: Array<string>;
  warning: string;

  constructor(private route: ActivatedRoute, private cookingService: CookingService, private modalController: ModalController) { }

  ngOnInit() {
    this.liststring = new Array<string>();
    this.vegList = new Array<string>();
    this.seasonList = new Array<string>();
    this.noodleList = new Array<string>();
    this.data = new CookingData();
    this.listObject = new Array<CookingData>();
    this.id = this.route.snapshot.paramMap.get('id');
    this.cookingService.getCookingByUsertrname(this.id).subscribe((result) => {
      this.cooking = result;
      this.calculateMenu(this.cooking);
    });
  }

  async showDisclaimer(data: CookingData) {
    const modal = await this.modalController.create({
      component: CookingModalComponent,
      componentProps: {
        name: data.name,
        quantity: data.quantity,
        warning: data.warning,
        lost: data.lost
      }
    });
    return await modal.present();

  }

  arrayDataIngredientVeg(cooking: Cooking) {
    cooking.ingredientVeg.forEach(x => {
      this.vegList.push(x.name);
    });
    return this.vegList;
  }
  arrayDataSeasoning(cooking: Cooking) {
    cooking.seasoning.forEach(x => {
      this.seasonList.push(x.name);
    });
    return this.seasonList;
  }
  arrayDataNoodle(cooking: Cooking) {
    cooking.noodle.forEach(x => {
      this.noodleList.push(x.name);
    });
    return this.noodleList;
  }

  calculateMenu(cooking: Cooking) {
    const quantityTotal = this.numbers(cooking);
    if ((cooking.person * 200) > quantityTotal) {
      this.warning = 'ไม่เพียงพอ';
    } else {
      const numberPeopleCanEat = Math.floor(this.numbers(cooking) / 200);
      this.warning = numberPeopleCanEat + '  ท่าน';
    }
    cooking.ingredientMeat.forEach(x => {
      if (this.materialList.pork.includes(x.name) &&
        (this.arrayDataIngredientVeg(cooking).includes('กระเพรา') || this.arrayDataIngredientVeg(cooking).includes('ใบกระเพรา'))) {
        if ((cooking.person * 200) <= x.quantity) {
          this.listObject.push({
            name: 'กระเพราหมูชิ้น',
            quantity: x.quantity,
            lost: null,
            people: Math.floor(x.quantity / 200),
            warning: ''
          });
        } else {
          this.listObject.push({
            name: 'กระเพราหมูชิ้น',
            quantity: x.quantity,
            lost: ((cooking.person * 200) - x.quantity),
            people: null,
            warning: 'เนื้อสัตว์ไม่เพียงพอ'
          });
        }
      }
      if (this.materialList.chicken.includes(x.name) &&
        (this.arrayDataIngredientVeg(cooking).includes('กระเพรา') || this.arrayDataIngredientVeg(cooking).includes('ใบกระเพรา'))) {
        if ((cooking.person * 200) <= x.quantity) {
          this.listObject.push({
            name: 'กระเพราไก่',
            quantity: x.quantity,
            lost: null,
            people: Math.floor(x.quantity / 200),
            warning: ''
          });
        } else {
          this.listObject.push({
            name: 'กระเพราไก่',
            quantity: x.quantity,
            lost: ((cooking.person * 200) - x.quantity),
            people: null,
            warning: 'เนื้อสัตว์ไม่เพียงพอ'
          });
        }
      }
      if (this.materialList.pork.includes(x.name) && this.arrayDataSeasoning(cooking).includes('กระเทียม')) {
        if ((cooking.person * 200) <= x.quantity) {
          this.listObject.push({
            name: 'หมูทอดกระเทียม',
            quantity: x.quantity,
            lost: null,
            people: Math.floor(x.quantity / 200),
            warning: ''
          });
        } else {
          this.listObject.push({
            name: 'หมูทอดกระเทียม',
            quantity: x.quantity,
            lost: ((cooking.person * 200) - x.quantity),
            people: null,
            warning: 'เนื้อสัตว์ไม่เพียงพอ'
          });
        }
      }
      if (this.materialList.chicken.includes(x.name) && this.arrayDataSeasoning(cooking).includes('กระเทียม')) {
        if ((cooking.person * 200) <= x.quantity) {
          this.listObject.push({
            name: 'ไก่ทอดกระเทียม',
            quantity: x.quantity,
            lost: null,
            people: Math.floor(x.quantity / 200),
            warning: ''
          });
        } else {
          this.listObject.push({
            name: 'ไก่ทอดกระเทียม',
            quantity: x.quantity,
            lost: ((cooking.person * 200) - x.quantity),
            people: null,
            warning: 'เนื้อสัตว์ไม่เพียงพอ'
          });
        }
      }
      if (x.name === 'หมูกรอบ' &&
        (this.arrayDataIngredientVeg(cooking).includes('กระเพรา') || this.arrayDataIngredientVeg(cooking).includes('ใบกระเพรา'))) {
        if ((cooking.person * 200) <= x.quantity) {
          this.listObject.push({
            name: 'กระเพราหมูกรอบ',
            quantity: x.quantity,
            lost: null,
            people: Math.floor(x.quantity / 200),
            warning: ''
          });
        } else {
          this.listObject.push({
            name: 'กระเพราหมูกรอบ',
            quantity: x.quantity,
            lost: ((cooking.person * 200) - x.quantity),
            people: null,
            warning: 'เนื้อสัตว์ไม่เพียงพอ'
          });
        }
      }
    });
  }


  numbers(cooking: Cooking) {
    let i = 0;
    cooking.ingredientMeat.forEach(x => {
      i = i + x.quantity;
    });
    return i;
  }



}
