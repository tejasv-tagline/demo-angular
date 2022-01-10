import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:IndexMainComponent,
  //   children:[{
  //     path:'home',component:HomeComponent
  //   }]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
