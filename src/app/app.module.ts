import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {ShoppingListModule} from "./shopping-list/shopping-list-module";
import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {RecipeService} from "./recipes/recipe-service/recipe.service";
import {UnlessDirective} from './directives/unless/unless.directive';
import {LogService} from "./services/log.service";
import {DataService} from "./services/data.service";
import {ShoppingListService} from "./shopping-list/shopping-list-service/shopping-list.service";
import {routing} from "./app.routing";
import {CoreModule} from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [
    LogService,
    DataService,
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
