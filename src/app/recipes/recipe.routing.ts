import {Routes, RouterModule} from "@angular/router";

import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";

const RECIPE_ROUTES: Routes = [
  {
    path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]
  }
];

//Always use forChild in feature modules. Not Root routes - which are defined in app.routing.
export const recipesRouting = RouterModule.forChild(RECIPE_ROUTES);
