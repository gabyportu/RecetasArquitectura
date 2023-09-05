import { Ingrediente } from "./ingrediente";

export interface Receta {
    id: number;
    image: string;
    imageType: string;
    likes: number;
    missedIngredientCount: number;
    missedIngredients: Ingrediente;
    title: string;
    unusedIngredients: Ingrediente;
    usedIngredientCount: number;
}