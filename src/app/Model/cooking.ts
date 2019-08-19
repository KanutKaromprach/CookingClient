import { CookingMaterial } from './cookingMaterial';

export class Cooking {
    id: string;
    username: string;
    password: string;
    ingredientMeat: Array<CookingMaterial>;
    ingredientVeg: Array<CookingMaterial>;
    seasoning: Array<CookingMaterial>;
    person: number;
    status: boolean;

    constructor() {
        this.ingredientMeat = new Array<CookingMaterial>();
        this.ingredientVeg = new Array<CookingMaterial>();
    }
}
