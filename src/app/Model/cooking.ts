import { CookingMaterial } from './cookingMaterial';
import { UserProfile } from './userProfile';

export class Cooking {
    id: string;
    username: string;
    password: string;
    ingredientMeat: Array<CookingMaterial>;
    ingredientVeg: Array<CookingMaterial>;
    seasoning: Array<CookingMaterial>;
    noodle: Array<CookingMaterial>;
    person: number;
    status: boolean;
    userProfile: UserProfile;

    constructor() {
        this.person = 0;
    }
}
