
import { CookingDetail } from './cookingDetail';

export class Cooking {
    id: string;
    username: string;
    password: string;
    ingredient: CookingDetail;
    seasoning: CookingDetail;
    person: number;
    status: boolean;
}
