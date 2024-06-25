import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  username: FormControl;
  name: FormControl;
  password: FormControl;
  repeatPassword: FormControl;
  email: FormControl;
  edad: FormControl;
  terms: FormControl;

  constructor(private authService: AuthService, private router: Router) {
    this.username = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(18),
      this.passwordValidator
    ]);
    this.repeatPassword = new FormControl('', [Validators.required, this.matchPasswords('password')]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.edad = new FormControl('', [Validators.required, Validators.min(13)]);
    this.terms = new FormControl(false, Validators.requiredTrue);

    this.registerForm = new FormGroup({
      username: this.username,
      name: this.name,
      password: this.password,
      repeatPassword: this.repeatPassword,
      email: this.email,
      edad: this.edad,
      terms: this.terms
    });
  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(() => {
      this.registerForm.updateValueAndValidity();
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!/\d/.test(password)) {
      return { number: true };
    }
    if (!/[A-Z]/.test(password)) {
      return { uppercase: true };
    }
    return null;
  }

  matchPasswords(password: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent || !control) return null;
      const pwd = control.parent.get(password);
      const repeatPwd = control.value;

      if (pwd && pwd.value !== repeatPwd) {
        return { mismatch: true };
      }
      return null;
    };
  }

  handleSubmit(): void {
    if (this.registerForm.valid) {
      const newUser = {
        username: this.registerForm.value.username,
        name: this.registerForm.value.name,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        edad: this.registerForm.value.edad,
        role: 'user'
      };
      this.authService.register(newUser).subscribe(
        () => {
          alert('Registro Exitoso');
          this.router.navigate(['/login']);
        }
      );
    }
  }

  onReset(): void {
    this.registerForm.reset();
  }
}
