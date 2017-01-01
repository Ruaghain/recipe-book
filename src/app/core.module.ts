import {DropdownDirective} from "./directives/dropdown/dropdown.directive";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [DropdownDirective, HomeComponent],
  exports: [DropdownDirective]
})
export class CoreModule {
}
