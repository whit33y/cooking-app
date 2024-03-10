import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Just a test',
      'https://www.cookipedia.co.uk/wiki/images/6/66/Sausage%2C_bean_and_radicchio_hash_pasta_recipe.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
