import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { UserValidationComponent } from './user-validation.component';

describe('UserValidationComponent', () => {
  let component: UserValidationComponent;
  let fixture: ComponentFixture<UserValidationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserValidationComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(UserValidationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show mail error if it is not filled properly', async () => {
    const expectedMailError = 'Formato de mail erroneo';
    component.form.setValue({
      mail: 'test',
      password: 'testpass',
      remind: false,
    });

    component.submit();
    fixture.detectChanges();
    const error = fixture.debugElement.query(By.css('.error-message'));

    expect(error).toBeTruthy();
    expect(error.nativeElement.innerText).toBe(expectedMailError);
  });

  it('should show mail error if it is not filled properly', async () => {
    const expectedPassError = 'Contraseña incorrecta, debe tener 5 caracteres';
    component.form.setValue({
      mail: 'test@domain.com',
      password: 'pass',
      remind: false,
    });

    component.submit();
    fixture.detectChanges();
    const error = fixture.debugElement.query(By.css('.error-message'));

    expect(error).toBeTruthy();
    expect(error.nativeElement.innerText).toBe(expectedPassError);
  });

  it('should not show errors if form it is filled properly', async () => {
    component.form.setValue({
      mail: 'test@domain.com',
      password: 'password',
      remind: false,
    });

    component.submit();
    fixture.detectChanges();
    const errors = fixture.debugElement.queryAll(By.css('.error-message'));

    expect(errors[0]).not.toBeDefined();
    expect(errors[1]).not.toBeDefined();
    expect(errors.length).toEqual(0);
  });
});
