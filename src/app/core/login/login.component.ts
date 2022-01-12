import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/card-list';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit ,OnChanges{
  @ViewChild('f') loginForm!: NgForm;

  public defaultPassword: string = '123';
  public genders: string[] = [' Male', ' Female'];
  public userDetails = {
    userId: '',
    textView:'',
    email: '',
    password: '',
    gender:''
  };
  public isSubmitted: boolean = false;
  public notValidated:boolean=true;
  public printVariable!:string;
  public printQuery!:string;
  public cutMyText:string='';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.userDetails = {
      userId: this.loginForm.value.userDetails.userId,
      textView:this.loginForm.value.userDetails.textarea,
      email : this.loginForm.value.userDetails.email,
      password : this.loginForm.value.userDetails.password,
      gender : this.loginForm.value.userDetails.gender,
    };
    this.loginForm.reset();
    // this.userDetails.userId = this.loginForm.value.userDetails.userId;
    // this.userDetails.email = this.loginForm.value.userDetails.email;
    // this.userDetails.password = this.loginForm.value.userDetails.password;
  }

  public onShowData() {
    console.log(this.printVariable);
  }
}


