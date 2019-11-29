import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.initSignInForm();
  }

  public onSubmit(): void {
    // TODO wrote sign in functionality with AuthService
  }

  private initSignInForm(): FormGroup {
    return new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
