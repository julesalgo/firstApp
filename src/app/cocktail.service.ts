import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CocktailService {
  constructor() {}

  public cocktail() {}

  getCocktail = [
    {
      name: "mojitos",
      prices: 15,
      img: "https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg"
    },
    {
      name: "Orval",
      prices: 5,
      img:
        "https://images.interdrinks.com/v5/img/p/81-14420-w786-h540-transparent.png"
    },
    {
      name: "Bora Bora",
      prices: 10,
      img:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/cocktail-bora-bora-sans-alcool-2806526/50409614-1-fre-FR/Cocktail-Bora-Bora-sans-alcool.jpg"
    }
  ];

  getCocktails() {
    return this.getCocktail;
  }
}
