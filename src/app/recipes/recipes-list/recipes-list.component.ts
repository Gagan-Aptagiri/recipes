import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'http://www.tomcorsonknowles.com/blog/wp-content/uploads/2012/04/Fresh-Fruit-Smoothie.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
