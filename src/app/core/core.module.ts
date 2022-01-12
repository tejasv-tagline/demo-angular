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
import { SearchPipe } from './pipes/search.pipe';
import { CustomPipe } from '../custom.pipe';
import { ShowServerComponent } from './show-server/show-server.component';
import { FilterPipe } from './pipes/filter.pipe';

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
    SearchPipe,
    FilterPipe,
    ShowServerComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent, HeaderComponent, BlogsComponent, ProfileComponent, SearchPipe],
})
export class CoreModule {}
