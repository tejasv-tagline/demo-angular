import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cards } from 'src/app/card-list';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cards: Cards[] = [
    {
      photo: 'assets/cardphoto.jpeg',
      title: 'Home Page Card 1',
      text: 'text card 1',
      button: 'Lets Login',
    },
    {
      photo: 'assets/camp.jpeg',
      title: 'Home Page Card 2',
      text: 'text card 2',
      button: 'Lets Login 2',
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    public userDataService: UserDataService
  ) {}
  ngOnInit(): void {}

  public loadProfile(): void {
    this.router.navigate(['profile']);
  }
  public loadBlogs(): void {
    this.router.navigate(['blogs']);
  }
  public onLogin(): void {
    // this.authService.login();
  }
  public onLogout(): void {
    // this.authService.logout();
  }
  public Activateuser(): void {
    this.userDataService.ActivatedUser = true;
  }
  public onSubmitForm(form: HTMLFormElement) {
    console.log('submitted', form);
  }
}
