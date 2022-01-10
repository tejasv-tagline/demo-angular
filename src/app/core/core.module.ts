import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PracticeComponent } from './practice/practice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    BlogsComponent,
    PracticeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent, HeaderComponent, BlogsComponent, ProfileComponent],
})
export class CoreModule {}
