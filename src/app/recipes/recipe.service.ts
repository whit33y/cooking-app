import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Just a test',
      'https://www.cookipedia.co.uk/wiki/images/6/66/Sausage%2C_bean_and_radicchio_hash_pasta_recipe.jpg'
    ),
    new Recipe(
      'A second test recipe',
      'Just a test 2',
      'https://www.cookipedia.co.uk/wiki/images/6/66/Sausage%2C_bean_and_radicchio_hash_pasta_recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
