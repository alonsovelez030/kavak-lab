import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as ENV } from '@environments/environment';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: ENV.route_hash } ) ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
