import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export const requiredFieldValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const userName: AbstractControl = control.get('userName');
  const password: AbstractControl = control.get('password');

  return userName.valid && password.valid ? null : { emptyField: true };
};

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  isSubmitted = false;
  error: string;

  ngOnInit(): void {
    this.signInForm = this.initSignInForm();
  }

  public onSubmit(): void {
    // TODO wrote sign in functionality with AuthService
    this.isSubmitted = true;
    this.error = this.signInForm.valid ? 'Invalid username or password' : 'Enter username or password';
  }

  private initSignInForm(): FormGroup {
    return new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }, { validators: requiredFieldValidator });
  }

  onFocus(fieldName: string): void {
    this.isSubmitted = false;
  }
}
