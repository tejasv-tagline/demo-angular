import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './core/blogs/blogs.component';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'profile/:id', component: ProfileComponent },
  // { path: 'profile/:id/:subId', component: ProfileComponent },
  // // {path:'profile',loadChildren: () => import('./core/profile/profile.component').then(m => m.ProfileComponent) },
  // { path: 'blogs', component: BlogsComponent },
  // { path: 'blogs/:id', component: BlogsComponent },
  // { path: 'blogs/:id/:subId', component: BlogsComponent },
  // { path: '**', redirectTo: '/home' },
  {
    path:'',
    component:IndexComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
