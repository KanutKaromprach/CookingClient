import { CookingMaterial } from './cookingMaterial';

export class Cooking {
    id: string;
    username: string;
    password: string;
    ingredient: Array<CookingMaterial>;
    seasoning: Array<CookingMaterial>;
    person: number;
    status: boolean;

    constructor() {
        this.ingredient = new Array<CookingMaterial>();
    }
}
