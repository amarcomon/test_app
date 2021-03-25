import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.scss'],
})
export class UserValidationComponent implements OnInit {
  public form: FormGroup;
  public errorMail: boolean;
  public errorPassword: boolean;
  private static readonly MAIL_PATTERN =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  constructor() {}

  ngOnInit() {
    const mail = new FormControl('', [
      Validators.required,
      Validators.pattern(UserValidationComponent.MAIL_PATTERN),
    ]);
    const password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    const remind = new FormControl(false);
    this.form = new FormGroup({ mail, password, remind });
  }

  submit() {
    this.checkFormValidation();
    console.log('Form submitted', this.form.value);
  }

  clearErrors() {
    this.errorMail = false;
    this.errorPassword = false;
  }

  private checkFormValidation() {
    if (this.form.get('mail').errors) {
      this.errorMail = !!this.form.get('mail').errors;
    }
    if (this.form.get('password').errors) {
      this.errorPassword = !!this.form.get('password').errors;
    }
  }
}
