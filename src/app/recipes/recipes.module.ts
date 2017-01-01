import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {RecipeStartComponent} from "./../recipes/recipe-start.component";
import {RecipeEditComponent} from "./../recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./../recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./../recipes/recipe-list/recipe-item.component";
import {RecipeListComponent} from "./../recipes/recipe-list/recipe-list.component";
import {RecipesComponent} from "./../recipes/recipes.component";
import {recipesRouting} from "./recipe.routing";
import {SharedModule} from "./../shared/shared.module";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    recipesRouting
  ]
})
export class RecipesModule {
}

