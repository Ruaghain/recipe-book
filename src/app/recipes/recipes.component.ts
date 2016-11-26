import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes/recipe";
import {LogService} from '../services/log.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private logService: LogService, private dataService: DataService) {
    this.logService.writeToLog('Recipes has been created.');
    this.dataService.addData('Create Recipes Component');
  }

  ngOnInit() {
  }

}
