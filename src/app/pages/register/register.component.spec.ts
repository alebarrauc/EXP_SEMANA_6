import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form with initial values', () => {
    const form = component.registerForm;
    expect(form).toBeTruthy();
    expect(form.get('username')?.value).toBe(''); // Uso de ?. para acceder al valor
    expect(form.get('name')?.value).toBe('');
    expect(form.get('password')?.value).toBe('');
    expect(form.get('repeatPassword')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
    expect(form.get('edad')?.value).toBe('');
    expect(form.get('terms')?.value).toBe(false);
  });

  it('should require the username', () => {
    const username = component.registerForm.get('username');
    expect(username?.valid).toBeFalsy();
    username?.setValue('');
    expect(username?.hasError('required')).toBeTruthy();
  });

  it('should validate the email format', () => {
    const email = component.registerForm.get('email');
    email?.setValue('invalid-email');
    expect(email?.hasError('email')).toBeTruthy();
    email?.setValue('valid@example.com');
    expect(email?.hasError('email')).toBeFalsy();
  });

  it('should validate the password requirements', () => {
    const password = component.registerForm.get('password');
    password?.setValue('123');
    expect(password?.hasError('minlength')).toBeTruthy();
    password?.setValue('12345678901234567890');
    expect(password?.hasError('maxlength')).toBeTruthy();
    password?.setValue('abcdef');
    expect(password?.hasError('number')).toBeTruthy();
    password?.setValue('abcdef1');
    expect(password?.hasError('uppercase')).toBeTruthy();
    password?.setValue('Abcdef1');
    expect(password?.valid).toBeTruthy();
  });

  it('should check if passwords match', () => {
    const password = component.registerForm.get('password');
    const repeatPassword = component.registerForm.get('repeatPassword');
    password?.setValue('Abcdef1');
    repeatPassword?.setValue('Abcdef1');
    expect(repeatPassword?.hasError('mismatch')).toBeFalsy();
    repeatPassword?.setValue('Abcdef2');
    expect(repeatPassword?.hasError('mismatch')).toBeTruthy();
  });

  it('should call authService register method when form is submitted', () => {
    const authServiceSpy = spyOn(authService, 'register').and.returnValue(of({}));
    const newUser = {
      username: 'testuser',
      name: 'Test User',
      password: 'Test@123',
      repeatPassword: 'Test@123',
      email: 'test@example.com',
      edad: 20,
      terms: true,
      role: 'user'
    };
    component.registerForm.setValue(newUser);
    component.handleSubmit();
    expect(authServiceSpy).toHaveBeenCalledWith(newUser);
  });
});
