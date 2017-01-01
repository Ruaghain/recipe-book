import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ShoppingListAddComponent} from './../shopping-list/shopping-list-add.component';
import {ShoppingListComponent} from './../shopping-list/shopping-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  //Need to import CommonModule to get access to ngIf etc. This is usually taken care of
  //in BrowserModule - however BrowserModule can only be imported once. Use CommonModule
  //in all other modules.
  imports: [FormsModule, CommonModule]
})
export class ShoppingListModule {
}
