import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//This is used if components are shared across multiple modules. Used in the usual way. Define imports etc
//and then just export the used ones.
@NgModule({
  exports: [CommonModule]
})
export class SharedModule {
}
