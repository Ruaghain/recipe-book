import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'data:image/jpeg;base64,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');

  constructor() { }

  ngOnInit() {
  }

}
