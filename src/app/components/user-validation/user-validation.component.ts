import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.scss'],
})
export class UserValidationComponent implements OnInit {

  public form: FormGroup;
  private static readonly MAIL_PATTERN = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'

  constructor() { }

  ngOnInit() {
    const mail = new FormControl('', [Validators.required, Validators.pattern(UserValidationComponent.MAIL_PATTERN)])
    const password = new FormControl('', [Validators.required, Validators.minLength(5)])
    this.form = new FormGroup({mail, password})
  }

}
