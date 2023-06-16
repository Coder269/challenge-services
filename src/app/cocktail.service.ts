import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktail[] = [];

  mojito: Cocktail;
  espressoMartini: Cocktail;
  rumPunch: Cocktail;


  constructor() {

    this.mojito = {
      name: "Mojito",
      price: 6,
      image: "https://www.shutterstock.com/image-photo/refreshing-summer-alcoholic-cocktail-mojito-260nw-1721641135.jpg"
    };

    this.espressoMartini = {
      name: "Espresso Martini",
      price: 8,
      image: "https://preppykitchen.com/wp-content/uploads/2021/01/espresso-martini-feature.jpg"

    }

    this.rumPunch = {
      name: "Rum punch",
      price: 12,
      image: "https://marleysmenu.com/wp-content/uploads/2021/06/Bacardi-Rum-Punch-Recipe-Card-Image.jpg"

    }

    this.cocktails.push(this.mojito);
    this.cocktails.push(this.espressoMartini);
    this.cocktails.push(this.rumPunch);

  }

  public getCocktails(): Array<Cocktail> {

    return this.cocktails;

  }
}
