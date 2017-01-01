import {Routes, RouterModule} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  //loading of the children needs to point to the directory of the module. Not the routing file.
  {path: 'recipes', loadChildren: './app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
