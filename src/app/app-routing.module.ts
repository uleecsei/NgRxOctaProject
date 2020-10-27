import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

const CALLBACK_PATH = 'login/callback';
const routes: Routes = [{
  path: CALLBACK_PATH,
  component: OktaCallbackComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
