import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  errorMessage: boolean = false;
  constructor(private router: Router, private fb: FormBuilder) {
    // this.myForm = this.fb.group({
    //   userId: ['', [Validators.required]],
    //   name: this.fb.group({
    //     firstName: ['', [Validators.required]],
    //     lastName: ['', [Validators.required]],
    //   }),
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   email: ['', [Validators.required, Validators.email]],
    // });

    this.myForm = this.fb.group({
      userId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {}

  get fControl() {
    return this.myForm.controls;
  }
  // get Fname(){
  //   return this.myForm.get('name')?.get('firstName');
  // }

  public loadLogin(): void {
    // console.log('this.myForm.value :>> ', this.myForm.value);
    if (this.myForm.valid) {
      setTimeout(() => {
        // this.myForm.reset();
        alert('Form successfully submitted !');
        this.router.navigate(['/login']);
      }, 1000);
    } else {
      this.errorMessage = true;
    }
  }

  public onSubmit(form: HTMLFormElement) {
    console.log('submitted', form);
    this.router.navigate(['/login']);
  }

  // navigateToOtrher(){

  // }
}
