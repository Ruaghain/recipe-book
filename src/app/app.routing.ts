import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";

const APP_ROUTES: Routes = [
  {path: '', component: AppComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
