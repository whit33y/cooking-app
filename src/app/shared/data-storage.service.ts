import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' }) //opcjonalne, uzywamy gdy chcemy uzywac serwis w innym serwisie
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // return this.http.put(
    //   'https://cooking-app-313b6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
    //   recipes
    // );
    this.http
      .put(
        'https://cooking-app-313b6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
